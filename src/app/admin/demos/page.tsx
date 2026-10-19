'use client';

import { useState } from 'react';

const INDUSTRIES = [
  'clinic',
  'salon',
  'restaurant',
  'construction',
  'education',
  'services',
  'hotel',
];

type BusinessDemoData = {
  businessName: string;
  industry: string;
  city: string;
  phone?: string;
  address?: string;
  email?: string;
  rating?: number;
  reviewCount?: number;
  about?: string;
  hours?: string;
  services?: Array<{
    name: string;
    description: string;
    icon?: string;
  }>;
};

export default function AdminDemosPage() {
  const [industry, setIndustry] = useState('clinic');
  const [businessName, setBusinessName] = useState('');
  const [jsonInput, setJsonInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleUpload = async () => {
    if (!businessName.trim()) {
      setStatus('error');
      setMessage('Business name is required');
      return;
    }

    let data: BusinessDemoData;
    try {
      data = JSON.parse(jsonInput);
    } catch {
      setStatus('error');
      setMessage('Invalid JSON format');
      return;
    }

    setStatus('loading');
    setMessage('Uploading...');

    try {
      const response = await fetch('/api/demos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ industry, businessName, data }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(`Uploaded: ${result.url}`);
        setBusinessName('');
        setJsonInput('');
      } else {
        setStatus('error');
        setMessage(result.error || 'Upload failed');
      }
    } catch (error) {
      setStatus('error');
      setMessage(`Error: ${String(error)}`);
    }
  };

  const handlePasteExample = () => {
    const example: BusinessDemoData = {
      businessName: 'Example Business',
      industry: industry,
      city: 'Example City',
      phone: '+1 (555) 123-4567',
      address: '123 Main Street, Example City, ST 12345',
      email: 'hello@example.com',
      rating: 4.8,
      reviewCount: 150,
      about: 'A brief description of your business goes here.',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      services: [
        {
          name: 'Service One',
          description: 'Description of your first service.',
          icon: '✨',
        },
        {
          name: 'Service Two',
          description: 'Description of your second service.',
          icon: '🎯',
        },
      ],
    };
    setJsonInput(JSON.stringify(example, null, 2));
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
        Upload Demo to Blob
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* Industry */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
            Industry
          </label>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ccc',
              borderRadius: '0.375rem',
              fontSize: '1rem',
            }}
          >
            {INDUSTRIES.map((ind) => (
              <option key={ind} value={ind}>
                {ind}
              </option>
            ))}
          </select>
        </div>

        {/* Business Name */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
            Business Name
          </label>
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="e.g., AlShifaClinic or Al Shifa Clinic"
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ccc',
              borderRadius: '0.375rem',
              fontSize: '1rem',
            }}
          />
        </div>

        {/* JSON Input */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <label style={{ fontWeight: '500' }}>Demo Data (JSON)</label>
            <button
              onClick={handlePasteExample}
              style={{
                padding: '0.5rem 1rem',
                background: '#f3f4f6',
                border: '1px solid #d1d5db',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
              }}
            >
              Paste Example
            </button>
          </div>
          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            placeholder='{"businessName": "...", "industry": "...", "city": "..."}'
            rows={15}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ccc',
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
              fontFamily: 'monospace',
            }}
          />
        </div>

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          disabled={status === 'loading'}
          style={{
            padding: '0.875rem 1.5rem',
            background: status === 'loading' ? '#9ca3af' : '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '0.375rem',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          }}
        >
          {status === 'loading' ? 'Uploading...' : 'Upload to Blob'}
        </button>

        {/* Status Message */}
        {message && (
          <div
            style={{
              padding: '1rem',
              background: status === 'success' ? '#dcfce7' : status === 'error' ? '#fee2e2' : '#f3f4f6',
              border: `1px solid ${status === 'success' ? '#86efac' : status === 'error' ? '#fca5a5' : '#e5e7eb'}`,
              borderRadius: '0.375rem',
              color: status === 'success' ? '#166534' : status === 'error' ? '#991b1b' : '#374151',
              wordBreak: 'break-word',
            }}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
