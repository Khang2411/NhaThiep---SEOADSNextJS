/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Seo Product'

export const size = {
  width: 1200,
  height: 630,
}

export default async function Image({ params }: { params: { id: number } }) {
  const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/listings/${params.id}`).then((res) => res.json())
  return new ImageResponse(
    (
      <>
        <div
          style={{
            background: "white",
            color: "dark",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <img style={{ borderRight: "1px solid #e6e6e6", }}
            src={product.data.thumbnail}
            width={500}
            height={500}
            alt="product seo"
          />

          <h2 style={{ padding: '20px', width: '40%' }}>
            <p style={{ display: "flex", flexDirection: "column-reverse" }}>
              <p style={{ fontWeight: '600' }}>{product.data.name}</p>
              <p style={{ opacity: '0.5' }}>{process.env.APP_NAME}</p>
            </p>
          </h2>
        </div>
      </>

    ),
    { ...size }
  );
}
