# Personalized demo data

Each business we email gets a JSON file here so their demo URL renders
*their* details, not placeholders.

## Path

```
src/data/demos/{industry}/{slug}.json
```

- `{industry}` is the resolved template industry: `clinic`, `salon`,
  `construction`, `education`, `restaurant`, or `hotel`.
- `{slug}` is the business name lowercased with every non-alphanumeric
  character removed: `AlShifaClinic` -> `alshifaclinic`.

## Schema

```json
{
  "businessName": "Al Shifa Clinic",
  "industry": "clinic",
  "city": "Riverside",
  "phone": "+1 (951) 555-0142",
  "address": "4120 Main Street, Riverside, CA 92501",
  "email": "hello@alshifaclinic.com",
  "rating": 4.8,
  "reviewCount": 214,
  "about": "One or two sentences written from the Google Business Profile.",
  "services": [
    { "name": "General Practice", "description": "Checkups and everyday care.", "icon": "🩺" }
  ],
  "hours": "Mon-Sat: 9:00 AM - 8:00 PM"
}
```

All fields except `businessName`, `industry`, and `city` are optional.
Only use publicly listed information from the Google Business Profile.

## How it is used

`src/app/[industry]/[businessName]/page.tsx` loads this file (when it exists)
and passes it to the template as the `demo` prop. Templates fall back to
their generic placeholder content when a file is missing, so every demo URL
keeps working.
