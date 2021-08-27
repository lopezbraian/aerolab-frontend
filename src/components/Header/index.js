import React, { useContext } from "react";
import { HeaderStyle } from "./style";
import aerolabSVG from "assets/aerolab-logo.svg";
import Coin from "components/Coin";
import { AppContext } from "appContext";
import { formatNumber } from "Utils";

export default function Header() {
  const { user } = useContext(AppContext);
  return (
    <HeaderStyle>
      <div className="logo">
        <img src={aerolabSVG} alt="logo" />
      </div>
      <div className="info">
        <div className="name">{user.name}</div>
        <Coin number={formatNumber(user.coins)} />
      </div>
    </HeaderStyle>
  );
}
