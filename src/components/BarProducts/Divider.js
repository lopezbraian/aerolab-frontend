import React from "react";

export default function Divider() {
  return (
    <div
      style={{
        height: "1px",
        width: "calc(100% - 48px)",

        backgroundColor: "gray",
        margin: "24px auto",
      }}
    ></div>
  );
}
