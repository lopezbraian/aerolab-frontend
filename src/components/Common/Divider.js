import React from "react";

export default function Divider({ width = "100%", color, margin }) {
  return (
    <div
      style={{
        height: "1px",
        width,
        backgroundColor: color,
        margin,
      }}
    ></div>
  );
}
