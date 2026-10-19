/**
 * Upload a demo JSON file to Vercel Blob.
 *
 * Usage:
 *   npx tsx scripts/upload-demo-json.ts <path-to-json-file>
 *
 * Examples:
 *   npx tsx scripts/upload-demo-json.ts my-clinic-demo.json
 *   npx tsx scripts/upload-demo-json.ts ./demos/salon/glow-beauty.json
 *
 * The JSON file must have:
 *   - businessName: string
 *   - industry: string (clinic, salon, restaurant, etc.)
 *   - city: string
 *
 * Optional fields: phone, address, email, rating, reviewCount, about, hours, services, heroImage, gallery
 */

import { put } from '@vercel/blob';
import * as fs from 'fs';
import * as path from 'path';

const args = process.argv.slice(2);

if (args.length < 1) {
  console.log(`
Usage: npx tsx scripts/upload-demo-json.ts <path-to-json-file>

The JSON file must include:
  - businessName: string
  - industry: string (clinic, salon, restaurant, construction, education, services, hotel)
  - city: string

Example JSON:
{
  "businessName": "Glow Beauty Salon",
  "industry": "salon",
  "city": "Mumbai",
  "phone": "+91 9876543210",
  "address": "123 Fashion Street, Mumbai 400001",
  "rating": 4.9,
  "reviewCount": 156,
  "about": "Premium beauty services in the heart of Mumbai.",
  "hours": "Mon-Sun: 10:00 AM - 8:00 PM",
  "services": [
    { "name": "Hair Cut", "description": "Expert styling for all hair types.", "icon": "💇" },
    { "name": "Facial", "description": "Rejuvenating skin treatments.", "icon": "✨" }
  ]
}
`);
  process.exit(1);
}

const filePath = args[0];

// Check file exists
if (!fs.existsSync(filePath)) {
  console.error(`❌ File not found: ${filePath}`);
  process.exit(1);
}

// Check environment
if (!process.env.BLOB_STORE_ID) {
  console.error('❌ Error: BLOB_STORE_ID not set in environment.');
  process.exit(1);
}

async function main() {
  // Read and parse JSON
  const content = fs.readFileSync(filePath, 'utf-8');
  let data: Record<string, unknown>;

  try {
    data = JSON.parse(content);
  } catch {
    console.error('❌ Invalid JSON format');
    process.exit(1);
  }

  // Validate required fields
  if (!data.businessName || !data.industry || !data.city) {
    console.error('❌ JSON must include: businessName, industry, city');
    process.exit(1);
  }

  const industry = String(data.industry).toLowerCase();
  const businessName = String(data.businessName);
  const slug = businessName.toLowerCase().replace(/[^a-z0-9]/g, '');

  console.log(`\n📋 Uploading demo: ${businessName}`);
  console.log(`   Industry: ${industry}`);
  console.log(`   City: ${data.city}`);
  console.log('');

  try {
    // Upload to Blob
    const blobPath = `demos/${industry}/${slug}.json`;
    const blob = await put(blobPath, JSON.stringify(data, null, 2), {
      access: 'private',
      addRandomSuffix: false,
      contentType: 'application/json',
    });

    console.log('✅ Demo uploaded successfully!\n');
    console.log('📁 Blob URL:');
    console.log(`   ${blob.url}\n`);
    console.log('🌐 Demo page:');
    console.log(`   https://demo.cit.org.in/${industry}/${slug}\n`);

  } catch (error) {
    console.error('❌ Failed to upload:', error);
    process.exit(1);
  }
}

main();
