import React from 'react';

// We will import templates dynamically or statically here
// For now, let's use static imports.
import ClinicTemplate from './clinic/ClinicTemplate';
import ClinicTemplate2 from './clinic/ClinicTemplate2';
import SalonTemplate from './salon/SalonTemplate';
import SalonTemplate2 from './salon/SalonTemplate2';
import ConstructionTemplate from './construction/ConstructionTemplate';
import ConstructionTemplate2 from './construction/ConstructionTemplate2';

export type TemplateProps = {
  businessName: string;
};

type TemplateVariant = {
  id: string;
  name: string;
  component: React.FC<TemplateProps>;
};

type TemplateRegistryType = {
  [key: string]: TemplateVariant[];
};

export const TemplateRegistry: TemplateRegistryType = {
  clinic: [
    { id: '1', name: 'Classic Teal', component: ClinicTemplate },
    { id: '2', name: 'Modern Blue', component: ClinicTemplate2 }
  ],
  salon: [
    { id: '1', name: 'Rose Luxury', component: SalonTemplate },
    { id: '2', name: 'Dark Elegance', component: SalonTemplate2 }
  ],
  construction: [
    { id: '1', name: 'Amber Industrial', component: ConstructionTemplate },
    { id: '2', name: 'Red Heavy Civil', component: ConstructionTemplate2 }
  ],
};

export const getTemplateForIndustry = (industrySlug: string, variantId?: string) => {
  const templates = TemplateRegistry[industrySlug.toLowerCase()];
  if (!templates || templates.length === 0) return null;
  
  if (variantId) {
    const variant = templates.find(t => t.id === variantId);
    if (variant) return variant.component;
  }
  
  // Default to the first variant if none specified or not found
  return templates[0].component;
};

export const getIndustryVariants = (industrySlug: string) => {
  return TemplateRegistry[industrySlug.toLowerCase()] || [];
};
