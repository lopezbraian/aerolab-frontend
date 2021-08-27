import React from "react";
import { CoinStyle } from "./style";

export default function Coin({ number }) {
  return (
    <CoinStyle>
      <span className="number">{number}</span>
      <span className="image"></span>
    </CoinStyle>
  );
}
