'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

export default function Studio() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
        <h2>Sanity Studio not configured</h2>
        <p>Set <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> in your <code>.env.local</code> to enable the Studio.</p>
      </div>
    );
  }
  return <NextStudio config={config} />;
}
