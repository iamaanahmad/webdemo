import { notFound } from 'next/navigation';
import { getTemplateForIndustry } from '@/templates/registry';

// Using Next.js 15+ async params
type PageProps = {
  params: Promise<{
    industry: string;
    businessName: string;
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
  
  return {
    title: `${formattedName} | Premium ${industry} Services`,
    description: `Welcome to ${formattedName}. The best ${industry} in town.`,
  };
}

export default async function DynamicDemoPage({ params }: PageProps) {
  const { industry, businessName } = await params;
  
  const TemplateComponent = getTemplateForIndustry(industry);
  
  if (!TemplateComponent) {
    notFound();
  }
  
  const formattedName = formatBusinessName(businessName);
  
  return (
    <TemplateComponent businessName={formattedName} />
  );
}
