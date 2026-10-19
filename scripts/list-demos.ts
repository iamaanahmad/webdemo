/**
 * List all demos stored in Vercel Blob.
 *
 * Usage:
 *   npx tsx scripts/list-demos.ts [industry]
 *
 * Examples:
 *   npx tsx scripts/list-demos.ts           # List all demos
 *   npx tsx scripts/list-demos.ts clinic    # List only clinic demos
 *   npx tsx scripts/list-demos.ts salon     # List only salon demos
 */

import { list } from '@vercel/blob';

const args = process.argv.slice(2);
const filterIndustry = args[0]?.toLowerCase();

async function main() {
  if (!process.env.BLOB_STORE_ID) {
    console.error('❌ Error: BLOB_STORE_ID not set in environment.');
    process.exit(1);
  }

  console.log('\n📂 Listing demos from Vercel Blob...\n');

  try {
    const { blobs } = await list({
      prefix: filterIndustry ? `demos/${filterIndustry}/` : 'demos/',
    });

    if (blobs.length === 0) {
      console.log('No demos found.');
      console.log('\nTo add a demo, run:');
      console.log('  npx tsx scripts/add-demo.ts <industry> "<Business Name>" "<City>"');
      return;
    }

    // Group by industry
    const grouped: Record<string, typeof blobs> = {};

    for (const blob of blobs) {
      const parts = blob.pathname.split('/');
      const industry = parts[1] || 'unknown';

      if (!grouped[industry]) {
        grouped[industry] = [];
      }
      grouped[industry].push(blob);
    }

    // Display
    const industries = Object.keys(grouped).sort();
    let totalCount = 0;

    for (const industry of industries) {
      const demos = grouped[industry];
      totalCount += demos.length;

      console.log(`\n🏢 ${industry.toUpperCase()} (${demos.length})`);
      console.log('─'.repeat(50));

      for (const demo of demos) {
        const fileName = demo.pathname.split('/').pop() || '';
        const businessName = fileName.replace('.json', '');

        // Parse URL for display
        const demoUrl = `https://demo.cit.org.in/${industry}/${businessName}`;

        console.log(`  • ${businessName}`);
        console.log(`    Demo: ${demoUrl}`);
        console.log(`    Blob: ${demo.url}`);
        console.log('');
      }
    }

    console.log('═'.repeat(50));
    console.log(`Total: ${totalCount} demos across ${industries.length} industries`);
    console.log('');

  } catch (error) {
    console.error('❌ Failed to list demos:', error);
    process.exit(1);
  }
}

main();
