import { notFound } from 'next/navigation';
import { getTemplateForIndustry, getIndustryVariants } from '@/templates/registry';
import { getDemoData, resolveIndustry } from '@/templates/demo-data';
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

  return {
    title: `${formattedName} | Premium ${industry} Services`,
    description:
      demo?.about ?? `Welcome to ${formattedName}${city}. The best ${industry} in town.`,
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

  return (
    <>
      <TemplateComponent businessName={formattedName} demo={demo} />
      <DemoSwitcher
        currentIndustry={industry.toLowerCase()}
        businessName={businessName}
        displayName={formattedName}
        currentVariant={variantId || '1'}
        variants={variants}
      />
    </>
  );
}
