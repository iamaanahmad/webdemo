import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { BusinessDemoData } from '@/templates/demo-data';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { industry, businessName, data } = body as {
      industry: string;
      businessName: string;
      data: BusinessDemoData;
    };

    // Validation
    if (!industry || !businessName || !data) {
      return NextResponse.json(
        { error: 'Missing required fields: industry, businessName, data' },
        { status: 400 }
      );
    }

    if (!data.businessName || !data.industry || !data.city) {
      return NextResponse.json(
        { error: 'Data must include: businessName, industry, city' },
        { status: 400 }
      );
    }

    // Generate slug (same logic as demo-data.ts)
    const slug = businessName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '');

    // Upload to Blob
    const blobPath = `demos/${industry}/${slug}.json`;
    const blob = await put(blobPath, JSON.stringify(data, null, 2), {
      access: 'private',
      addRandomSuffix: false, // Use exact path for predictable URLs
      contentType: 'application/json',
    });

    return NextResponse.json({
      success: true,
      url: blob.url,
      path: blobPath,
      businessName: data.businessName,
    });
  } catch (error) {
    console.error('Failed to upload demo:', error);
    return NextResponse.json(
      { error: 'Failed to upload demo', details: String(error) },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Demo upload API. Use POST to upload a demo.',
    requiredFields: ['industry', 'businessName', 'data'],
    dataFields: ['businessName', 'industry', 'city'],
  });
}
