/**
 * Per-business demo personalization.
 *
 * Each personalized demo is a JSON file at:
 *   src/data/demos/{industry}/{slug}.json
 *
 * slug = lowercase(businessName) with every non-alphanumeric char removed.
 *   e.g. "AlShifaClinic" -> "alshifaclinic", "Joe's Dental-Care" -> "joesdentalcare"
 *
 * The dynamic route src/app/[industry]/[businessName]/page.tsx loads the file
 * (if it exists) and passes it to the template as the `demo` prop. Templates
 * render their generic placeholder content when `demo` is null, so every URL
 * keeps working with or without a data file.
 *
 * New files are added by the client-hunting sweeps (one JSON per emailed
 * business) and pushed to main; Vercel redeploys demo.cit.org.in automatically.
 */

export type DemoService = {
  name: string;
  description: string;
  /** emoji or short glyph shown on the service card */
  icon?: string;
};

export type BusinessDemoData = {
  /** Display name, e.g. "Al Shifa Clinic" */
  businessName: string;
  /** Resolved industry slug, e.g. "clinic" */
  industry: string;
  /** City from the Google Business Profile, e.g. "Riverside" */
  city: string;
  /** Phone as listed publicly, e.g. "+1 (951) 555-0142" */
  phone?: string;
  /** Street address as listed publicly */
  address?: string;
  /** Public contact email, if the business lists one */
  email?: string;
  /** Google rating, e.g. 4.8 */
  rating?: number;
  /** Google review count, e.g. 214 */
  reviewCount?: number;
  /** 1-2 sentence about blurb written from the GBP listing */
  about?: string;
  /** Real services offered, taken from the GBP categories/services */
  services?: DemoService[];
  /** Opening hours summary, e.g. "Mon-Sat: 9:00 AM - 8:00 PM" */
  hours?: string;
};

/** "AlShifaClinic" -> "alshifaclinic" */
export function demoSlug(raw: string): string {
  return decodeURIComponent(raw)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

/**
 * Maps everyday category words to the template industries we have.
 * Lets sweeps use URLs like /dental/SmileCare or /plumber/FixItFast.
 */
const INDUSTRY_ALIASES: Record<string, string> = {
  clinic: 'clinic',
  dental: 'clinic',
  dentist: 'clinic',
  chiropractor: 'clinic',
  physiotherapy: 'clinic',
  veterinarian: 'clinic',
  vet: 'clinic',
  salon: 'salon',
  spa: 'salon',
  barbershop: 'salon',
  beauty: 'salon',
  restaurant: 'restaurant',
  cafe: 'restaurant',
  bakery: 'restaurant',
  hotel: 'hotel',
  resort: 'hotel',
  motel: 'hotel',
  guesthouse: 'hotel',
  education: 'education',
  school: 'education',
  tutoring: 'education',
  coaching: 'education',
  institute: 'education',
  construction: 'construction',
  contractor: 'construction',
  plumber: 'construction',
  electrician: 'construction',
  hvac: 'construction',
  roofing: 'construction',
};

export function resolveIndustry(raw: string): string {
  const key = raw.toLowerCase();
  return INDUSTRY_ALIASES[key] ?? key;
}

/** Loads the personalization JSON for a business, or null when none exists. */
export async function getDemoData(
  industry: string,
  businessName: string
): Promise<BusinessDemoData | null> {
  const slug = demoSlug(businessName);
  if (!slug) return null;
  try {
    const mod = await import(`@/data/demos/${industry}/${slug}.json`);
    return (mod.default ?? mod) as BusinessDemoData;
  } catch {
    return null;
  }
}
