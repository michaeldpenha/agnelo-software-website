import { ImageResponse } from 'next/og';

export const alt = 'Política de Privacidad — Agnelo Software';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
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
          Agnelo Software · A Tiempo
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
          Política de Privacidad
        </div>
        <div
          style={{
            color: '#BFDBFE',
            fontSize: 28,
            marginTop: 24,
          }}
        >
          Conforme a la LFPDPPP
        </div>
      </div>
    ),
    { ...size },
  );
}
