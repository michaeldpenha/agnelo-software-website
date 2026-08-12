import { ImageResponse } from 'next/og';

export const alt = 'Agnelo Software';
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
            color: '#fff',
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: '-2px',
            lineHeight: 1.1,
          }}
        >
          Agnelo Software
        </div>
        <div
          style={{
            color: '#93C5FD',
            fontSize: 32,
            marginTop: 24,
            letterSpacing: '2px',
          }}
        >
          Innovation · Code · Solutions
        </div>
      </div>
    ),
    { ...size },
  );
}
