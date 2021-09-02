import React from "react";

export default function Divider({color , width , margin  }) {
  return (
    <div
      style={{
        height: "1px",
        width,
        backgroundColor:color,
        margin: margin,
      }}
    ></div>
  );
}
