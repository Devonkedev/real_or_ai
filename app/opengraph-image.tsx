import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f3ead6",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "10px",
            marginBottom: "56px",
          }}
        >
          <div style={{ flex: 1, backgroundColor: "#e08a2f", height: "100%" }} />
          <div style={{ flex: 1, backgroundColor: "#f3ead6", height: "100%" }} />
          <div style={{ flex: 1, backgroundColor: "#2f6b4f", height: "100%" }} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 108,
              fontWeight: 700,
              color: "#211a10",
              letterSpacing: "-0.03em",
              display: "flex",
            }}
          >
            Real or AI?
          </div>
          <div
            style={{
              fontSize: 34,
              color: "#4d4230",
              marginTop: 28,
              display: "flex",
              maxWidth: 880,
            }}
          >
            India&rsquo;s Independence — Can you tell history from hallucination?
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "10px",
            marginTop: "56px",
          }}
        >
          <div style={{ flex: 1, backgroundColor: "#e08a2f", height: "100%" }} />
          <div style={{ flex: 1, backgroundColor: "#f3ead6", height: "100%" }} />
          <div style={{ flex: 1, backgroundColor: "#2f6b4f", height: "100%" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
