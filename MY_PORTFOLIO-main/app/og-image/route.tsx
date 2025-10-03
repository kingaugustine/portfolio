import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
  try {
    // Load the image and convert to base64
    const imageUrl = new URL('/victor logo.jpg', 'https://victor-onyemaechi.vercel.app')
    const imageResponse = await fetch(imageUrl)
    const imageBuffer = await imageResponse.arrayBuffer()
    const base64Image = Buffer.from(imageBuffer).toString('base64')
    const dataUrl = `data:image/jpeg;base64,${base64Image}`

    return new ImageResponse(
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Main Logo */}
        <img
          src={dataUrl}
          alt="King Augustine Logo"
          style={{ 
            width: 600, 
            height: 600, 
            borderRadius: "20px", 
            objectFit: "cover", 
          }}
        />
      </div>,
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (error) {
    console.error('Error generating OG image:', error)
    // Fallback without image
    return new ImageResponse(
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ 
          fontSize: 48, 
          color: "#333333", 
          fontWeight: 700,
          textAlign: "center",
        }}>
          King Augustine
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    )
  }
} 