# Demo Management Scripts

These scripts help you manage demo data in Vercel Blob without git commits or rebuilds.

> The Blob store is **private**. Uploads use `access: 'private'` and the site reads
> demos server-side through the authenticated SDK, so JSONs are never publicly
> browsable. Reads bypass the CDN (`useCache: false`), so uploads and updates
> reflect on the live site immediately — no rebuild, no waiting.

## Prerequisites

Set these environment variables (already done in Vercel, create `.env.local` for local use):

```bash
BLOB_READ_WRITE_TOKEN=your_read_write_token  # required for uploads AND reads
BLOB_STORE_ID=your_store_id
```

## Quick Reference

### 1. Add a simple demo (minimal info)

```bash
npx tsx scripts/add-demo.ts <industry> "<Business Name>" "<City>" [phone] [address]
```

**Examples:**
```bash
npx tsx scripts/add-demo.ts clinic "Al Shifa Clinic" "Riverside"
npx tsx scripts/add-demo.ts salon "Glow Beauty" "Mumbai" "+91 9876543210"
npx tsx scripts/add-demo.ts restaurant "Tasty Bites" "Delhi" "+91 9988776655" "123 Main St"
```

Creates a demo with:
- Basic info (name, city, phone, address)
- Default rating (4.8)
- Default services for the industry
- Auto-generated description

---

### 2. Upload a detailed JSON file

```bash
npx tsx scripts/upload-demo-json.ts <path-to-json>
```

**Example:**
```bash
npx tsx scripts/upload-demo-json.ts my-clinic.json
```

**JSON format:**
```json
{
  "businessName": "Glow Beauty Salon",
  "industry": "salon",
  "city": "Mumbai",
  "phone": "+91 9876543210",
  "address": "123 Fashion Street, Mumbai 400001",
  "email": "hello@glowbeauty.example.com",
  "rating": 4.9,
  "reviewCount": 156,
  "about": "Premium beauty services in the heart of Mumbai.",
  "hours": "Mon-Sun: 10:00 AM - 8:00 PM",
  "services": [
    { "name": "Hair Cut", "description": "Expert styling.", "icon": "💇" },
    { "name": "Facial", "description": "Skin treatments.", "icon": "✨" }
  ],
  "heroImage": "https://images.unsplash.com/...",
  "gallery": [
    "https://images.unsplash.com/...",
    "https://images.unsplash.com/..."
  ]
}
```

---

### 3. List all demos in Blob

```bash
npx tsx scripts/list-demos.ts           # All demos
npx tsx scripts/list-demos.ts clinic    # Only clinics
npx tsx scripts/list-demos.ts salon     # Only salons
```

---

### 4. Migrate existing local demos to Blob (one-time)

```bash
npx tsx scripts/migrate-demos-to-blob.ts
```

Uploads all JSON files from `src/data/demos/` to Blob.

---

## Workflow

### Traditional way (OLD ❌)
1. Create JSON file in git
2. Commit & push
3. Wait for Vercel to rebuild entire site
4. Demo goes live after 2-3 minutes

### New way (NEW ✅)
1. Run `npx tsx scripts/add-demo.ts clinic "New Clinic" "City"`
2. Demo is live **immediately** (no rebuild!)

---

## Demo URLs

After uploading, demos are available at:
```
https://demo.cit.org.in/{industry}/{businessname}
```

Example:
```bash
# After running:
npx tsx scripts/add-demo.ts salon "Glow Beauty" "Mumbai"

# Demo is live at:
https://demo.cit.org.in/salon/glowbeauty
```

---

## Industries

Valid industry values:
- `clinic` (also: dental, dentist, chiropractor, physiotherapy, vet)
- `salon` (also: spa, barbershop, beauty)
- `restaurant` (also: cafe, bakery)
- `construction` (also: contractor, plumber, electrician, hvac, roofing)
- `education` (also: school, tutoring, coaching, institute)
- `services` (also: detailing, grooming, repair, cleaning, handyman)
- `hotel` (also: resort, motel, guesthouse)

---

## Admin UI Alternative

You can also use the web interface at:
```
https://demo.cit.org.in/admin/demos
```

This provides a form to upload demos directly from your browser.
