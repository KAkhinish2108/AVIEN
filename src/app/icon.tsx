import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#641E2D",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F7F5F0",
          fontSize: 18,
          fontWeight: 600,
          letterSpacing: 1,
        }}
      >
        A
      </div>
    ),
    size,
  );
}
