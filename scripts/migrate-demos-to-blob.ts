/**
 * Migration script: Upload all local demo JSON files to Vercel Blob.
 *
 * Usage: npx tsx scripts/migrate-demos-to-blob.ts
 *
 * Prerequisites:
 * - BLOB_STORE_ID environment variable must be set
 * - Run from project root
 */

import { put } from '@vercel/blob';
import * as fs from 'fs';
import * as path from 'path';

const DEMOS_DIR = path.join(process.cwd(), 'src', 'data', 'demos');

interface MigrationResult {
  industry: string;
  file: string;
  status: 'success' | 'error' | 'skipped';
  url?: string;
  error?: string;
}

async function migrateDemos(): Promise<MigrationResult[]> {
  const results: MigrationResult[] = [];

  // Check if demos directory exists
  if (!fs.existsSync(DEMOS_DIR)) {
    console.error(`Demos directory not found: ${DEMOS_DIR}`);
    return results;
  }

  // Get all industry directories
  const industries = fs.readdirSync(DEMOS_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  console.log(`Found ${industries.length} industries: ${industries.join(', ')}\n`);

  // Process each industry
  for (const industry of industries) {
    const industryPath = path.join(DEMOS_DIR, industry);
    const files = fs.readdirSync(industryPath)
      .filter(file => file.endsWith('.json'));

    console.log(`Processing ${industry}: ${files.length} demos`);

    for (const file of files) {
      const filePath = path.join(industryPath, file);
      const slug = file.replace('.json', '');
      const blobPath = `demos/${industry}/${file}`;

      try {
        // Read the JSON file
        const content = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(content);

        // Upload to Blob
        const blob = await put(blobPath, JSON.stringify(data, null, 2), {
          access: 'private',
          addRandomSuffix: false,
          contentType: 'application/json',
        });

        results.push({
          industry,
          file,
          status: 'success',
          url: blob.url,
        });

        console.log(`  ✓ ${file} -> ${blob.url}`);
      } catch (error) {
        results.push({
          industry,
          file,
          status: 'error',
          error: String(error),
        });

        console.error(`  ✗ ${file} - Error: ${error}`);
      }
    }
  }

  return results;
}

// Run migration
async function main() {
  console.log('Starting demo migration to Vercel Blob...\n');

  if (!process.env.BLOB_STORE_ID) {
    console.error('Error: BLOB_STORE_ID environment variable is not set.');
    console.error('Please set it before running this script.');
    process.exit(1);
  }

  const results = await migrateDemos();

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('MIGRATION SUMMARY');
  console.log('='.repeat(60));

  const successCount = results.filter(r => r.status === 'success').length;
  const errorCount = results.filter(r => r.status === 'error').length;
  const skippedCount = results.filter(r => r.status === 'skipped').length;

  console.log(`Total: ${results.length}`);
  console.log(`✓ Success: ${successCount}`);
  console.log(`✗ Errors: ${errorCount}`);
  console.log(`⊘ Skipped: ${skippedCount}`);

  if (errorCount > 0) {
    console.log('\nFailed uploads:');
    results
      .filter(r => r.status === 'error')
      .forEach(r => {
        console.log(`  - ${r.industry}/${r.file}: ${r.error}`);
      });
  }

  console.log('\nMigration complete!');
}

main().catch(console.error);
