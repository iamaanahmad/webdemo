/**
 * Quick script to add a new demo to Vercel Blob.
 *
 * Usage:
 *   npx tsx scripts/add-demo.ts <industry> <businessName> <city> [phone] [address]
 *
 * Examples:
 *   npx tsx scripts/add-demo.ts clinic "Al Shifa Clinic" "Riverside"
 *   npx tsx scripts/add-demo.ts salon "Glow Beauty" "Mumbai" "+91 9876543210"
 *   npx tsx scripts/add-demo.ts restaurant "Tasty Bites" "Delhi" "+91 9988776655" "123 Main St"
 *
 * This will:
 * 1. Create a demo JSON with basic info
 * 2. Upload to Vercel Blob
 * 3. Print the live URL
 *
 * No git commit, no Vercel rebuild needed!
 */

import { put } from '@vercel/blob';

// Parse command line args
const args = process.argv.slice(2);

if (args.length < 3) {
  console.log(`
Usage: npx tsx scripts/add-demo.ts <industry> <businessName> <city> [phone] [address]

Industries: clinic, salon, restaurant, construction, education, services, hotel

Examples:
  npx tsx scripts/add-demo.ts clinic "Al Shifa Clinic" "Riverside"
  npx tsx scripts/add-demo.ts salon "Glow Beauty" "Mumbai" "+91 9876543210"
  npx tsx scripts/add-demo.ts restaurant "Tasty Bites" "Delhi" "+91 9988776655" "123 Main St"
`);
  process.exit(1);
}

const industry = args[0].toLowerCase();
const businessName = args[1];
const city = args[2];
const phone = args[3] || '';
const address = args[4] || '';

// Default services by industry
const DEFAULT_SERVICES: Record<string, Array<{ name: string; description: string; icon: string }>> = {
  clinic: [
    { name: 'General Consultation', description: 'Comprehensive health check-ups and medical advice.', icon: '🩺' },
    { name: 'Preventive Care', description: 'Screenings and wellness programs to keep you healthy.', icon: '💊' },
  ],
  salon: [
    { name: 'Hair Services', description: 'Cuts, styling, coloring, and treatments.', icon: '💇' },
    { name: 'Skin Care', description: 'Facials, clean-ups, and skin treatments.', icon: '✨' },
  ],
  restaurant: [
    { name: 'Dine-In', description: 'Enjoy our delicious meals in a cozy atmosphere.', icon: '🍽️' },
    { name: 'Takeaway', description: 'Quick pickup for your favorite dishes.', icon: '🥡' },
  ],
  construction: [
    { name: 'Installation', description: 'Professional installation services.', icon: '🔧' },
    { name: 'Repairs', description: 'Quick and reliable repair work.', icon: '🛠️' },
  ],
  education: [
    { name: 'Classes', description: 'Expert-led learning sessions.', icon: '📚' },
    { name: 'Workshops', description: 'Hands-on skill development.', icon: '✏️' },
  ],
  services: [
    { name: 'Service One', description: 'Professional service tailored to your needs.', icon: '⭐' },
    { name: 'Service Two', description: 'Additional specialized service.', icon: '🎯' },
  ],
  hotel: [
    { name: 'Accommodation', description: 'Comfortable rooms for a restful stay.', icon: '🛏️' },
    { name: 'Dining', description: 'On-site restaurant with local cuisine.', icon: '🍳' },
  ],
};

async function main() {
  // Check environment
  if (!process.env.BLOB_STORE_ID) {
    console.error('❌ Error: BLOB_STORE_ID not set in environment.');
    console.error('   Make sure you have .env.local or environment variables configured.');
    process.exit(1);
  }

  // Generate slug
  const slug = businessName.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Build demo data
  const demoData = {
    businessName,
    industry,
    city,
    phone: phone || undefined,
    address: address || undefined,
    rating: 4.8,
    reviewCount: Math.floor(Math.random() * 200) + 50,
    about: `${businessName} offers quality ${industry} services in ${city}. Visit us for the best experience.`,
    hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
    services: DEFAULT_SERVICES[industry] || DEFAULT_SERVICES.services,
  };

  // Remove undefined values
  const cleanData = Object.fromEntries(
    Object.entries(demoData).filter(([_, v]) => v !== undefined)
  );

  console.log(`\n📋 Creating demo for: ${businessName}`);
  console.log(`   Industry: ${industry}`);
  console.log(`   City: ${city}`);
  if (phone) console.log(`   Phone: ${phone}`);
  if (address) console.log(`   Address: ${address}`);
  console.log('');

  try {
    // Upload to Blob
    const blobPath = `demos/${industry}/${slug}.json`;
    const blob = await put(blobPath, JSON.stringify(cleanData, null, 2), {
      access: 'private',
      addRandomSuffix: false,
      contentType: 'application/json',
    });

    console.log('✅ Demo uploaded successfully!\n');
    console.log('📁 Blob URL:');
    console.log(`   ${blob.url}\n`);
    console.log('🌐 Demo page (after deployment):');
    console.log(`   https://demo.cit.org.in/${industry}/${businessName.replace(/\s+/g, '')}\n`);
    console.log('📍 Or test locally:');
    console.log(`   http://localhost:3000/${industry}/${businessName.replace(/\s+/g, '')}\n`);

  } catch (error) {
    console.error('❌ Failed to upload:', error);
    process.exit(1);
  }
}

main();
