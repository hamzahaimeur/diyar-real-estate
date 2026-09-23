import { ImageResponse } from "next/og";

export const alt = "Diyar — real estate listing demo with sample data";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #081411 0%, #163028 100%)",
          color: "#f6f1e8",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 14,
              background: "#c99a48",
              color: "#081411",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 46,
              fontWeight: 700,
            }}
          >
            D
          </div>
          <div style={{ marginLeft: 22, fontSize: 52, fontWeight: 700 }}>Diyar</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
            Find the property that feels like home
          </div>
          <div style={{ marginTop: 26, fontSize: 30, color: "#c3d6c8", maxWidth: 900 }}>
            Real estate listing website — search, filters, saved properties and detail pages.
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              padding: "12px 26px",
              borderRadius: 999,
              border: "2px solid #d9b66f",
              color: "#d9b66f",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            DEMO · ALL DATA IS SAMPLE ONLY
          </div>
        </div>
      </div>
    ),
    size,
  );
}
