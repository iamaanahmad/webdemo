import React from 'react';

// We will import templates dynamically or statically here
// For now, let's use static imports.
import ClinicTemplate from './clinic/ClinicTemplate';
import SalonTemplate from './salon/SalonTemplate';
import ConstructionTemplate from './construction/ConstructionTemplate';

export type TemplateProps = {
  businessName: string;
};

type TemplateRegistryType = {
  [key: string]: React.FC<TemplateProps>;
};

export const TemplateRegistry: TemplateRegistryType = {
  clinic: ClinicTemplate,
  salon: SalonTemplate,
  construction: ConstructionTemplate,
};

export const getTemplateForIndustry = (industrySlug: string) => {
  // Try to find the template, fallback to undefined
  return TemplateRegistry[industrySlug.toLowerCase()];
};
