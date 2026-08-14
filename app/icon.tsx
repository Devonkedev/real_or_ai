import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#211a10",
        }}
      >
        <div style={{ flex: 1, backgroundColor: "#e08a2f", display: "flex" }} />
        <div style={{ flex: 1.1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div
            style={{
              fontSize: 34,
              fontWeight: 700,
              color: "#f3ead6",
              display: "flex",
              fontFamily: "serif",
            }}
          >
            ?
          </div>
        </div>
        <div style={{ flex: 1, backgroundColor: "#2f6b4f", display: "flex" }} />
      </div>
    ),
    { ...size },
  );
}
