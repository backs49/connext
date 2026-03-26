import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 36,
          background: 'linear-gradient(135deg, #0B3D91 0%, #00A3E0 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontSize: 110,
            fontWeight: 800,
            color: 'white',
            letterSpacing: -4,
          }}
        >
          C
        </span>
      </div>
    ),
    { ...size }
  );
}
