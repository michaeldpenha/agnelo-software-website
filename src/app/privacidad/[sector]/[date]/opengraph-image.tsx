import { ImageResponse } from 'next/og';

export const alt = 'Aviso de Privacidad — Agnelo Software';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const SECTOR_LABELS: Record<string, string> = {
  medical: 'Sector médico',
  others: 'Otros negocios',
};

export default function Image({ params }: { params: { sector: string; date: string } }) {
  const sectorLabel = SECTOR_LABELS[params.sector] ?? params.sector;

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            color: '#93C5FD',
            fontSize: 24,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          Agnelo Software
        </div>
        <div
          style={{
            color: '#fff',
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: '-1px',
            lineHeight: 1.1,
          }}
        >
          Aviso de Privacidad
        </div>
        <div
          style={{
            color: '#BFDBFE',
            fontSize: 32,
            marginTop: 20,
          }}
        >
          {sectorLabel}
        </div>
        <div
          style={{
            color: '#93C5FD',
            fontSize: 20,
            marginTop: 12,
          }}
        >
          {params.date}
        </div>
      </div>
    ),
    { ...size },
  );
}
