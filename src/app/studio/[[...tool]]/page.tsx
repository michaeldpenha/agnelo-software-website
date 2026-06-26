import NextDynamic from 'next/dynamic';

export const dynamic = 'force-dynamic';
export { metadata, viewport } from 'next-sanity/studio';

const Studio = NextDynamic(() => import('./Studio'), { ssr: false });

export default function StudioPage() {
  return <Studio />;
}
