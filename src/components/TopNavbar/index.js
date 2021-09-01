import React, { useContext } from "react";
import { HeaderStyle } from "./style";
import aerolabSVG from "assets/aerolab-logo.svg";
import Coin from "components/Coin";
import { UserContext } from "context/userContext";
import { formatNumber } from "Utils";

export default function TopNavbar() {
  const { user } = useContext(UserContext);
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
