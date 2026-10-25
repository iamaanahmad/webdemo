import { notFound } from 'next/navigation';
import { getTemplateForIndustry, getIndustryVariants } from '@/templates/registry';
import { getDemoData, resolveIndustry, fallbackHeroImage } from '@/templates/demo-data';
import DemoSwitcher from '@/components/DemoSwitcher';

// Using Next.js 15+ async params
type PageProps = {
  params: Promise<{
    industry: string;
    businessName: string;
  }>;
  searchParams: Promise<{
    v?: string;
  }>;
};

function formatBusinessName(rawName: string) {
  // 1. Decode URI components (e.g., %20 becomes space)
  let name = decodeURIComponent(rawName);

  // 2. If the name has no spaces and no hyphens, assume it's PascalCase/CamelCase and split it
  if (!name.includes(' ') && !name.includes('-')) {
    // Splits "AlShifaClinic" into "Al Shifa Clinic"
    name = name.replace(/([a-z])([A-Z])/g, '$1 $2');
  } else if (name.includes('-')) {
    // If they used hyphens (e.g., "al-shifa-clinic"), replace with spaces and capitalize
    name = name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  return name;
}

export async function generateMetadata({ params }: PageProps) {
  const { industry, businessName } = await params;

  const formattedName = formatBusinessName(businessName);
  const industrySlug = resolveIndustry(industry);
  const demo = await getDemoData(industrySlug, businessName);
  const city = demo?.city ? ` in ${demo.city}` : '';
  // Prefer the verified name from the demo data over the slug-derived one
  // (e.g. "619 Boxing Gym", not "619Boxing Gym").
  const displayName = demo?.businessName || formattedName;
  const description =
    demo?.about ?? `Welcome to ${displayName}${city}. The best ${industry} in town.`;
  // WhatsApp/OG preview image: the business's own hero photo when the demo
  // has one, otherwise a relevant per-industry stock photo. Absolute URL
  // (via metadataBase) so link previews render it.
  const ogImage = demo?.heroImage || fallbackHeroImage(industrySlug);
  const pageUrl = `https://demo.cit.org.in/${industry}/${businessName}`;

  return {
    title: `${displayName} | Premium ${industry} Services`,
    description,
    openGraph: {
      title: `${displayName} | Premium ${industry} Services`,
      description,
      url: pageUrl,
      siteName: 'Demo Websites',
      type: 'website',
      images: [{ url: ogImage, alt: displayName }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${displayName} | Premium ${industry} Services`,
      description,
      images: [ogImage],
    },
  };
}

export default async function DynamicDemoPage({ params, searchParams }: PageProps) {
  const { industry, businessName } = await params;
  const { v: variantId } = await searchParams;

  // "dental" -> "clinic" etc., so sweeps can use everyday category words in URLs
  const industrySlug = resolveIndustry(industry);
  const TemplateComponent = getTemplateForIndustry(industrySlug, variantId);
  const variants = getIndustryVariants(industrySlug).map(v => ({ id: v.id, name: v.name }));

  if (!TemplateComponent) {
    notFound();
  }

  const formattedName = formatBusinessName(businessName);
  // Per-business personalization JSON at src/data/demos/{industry}/{slug}.json (null when absent)
  const demo = await getDemoData(industrySlug, businessName);
  // Prefer the verified name from the demo data over the slug-derived one
  // (e.g. "619 Boxing Gym", not "619Boxing Gym"; "2Mood Beauty Studio", not "Two Mood Beauty Studio").
  const displayName = demo?.businessName || formattedName;

  return (
    <>
      <TemplateComponent businessName={displayName} demo={demo} />
      <DemoSwitcher
        currentIndustry={industry.toLowerCase()}
        businessName={businessName}
        displayName={displayName}
        currentVariant={variantId || '1'}
        variants={variants}
      />
    </>
  );
}
