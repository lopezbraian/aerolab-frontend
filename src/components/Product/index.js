import React, { useContext, useState } from "react";
import {
  FooterProduct,
  WrapPruduct,
  PCategory,
  PName,
  ImageProduct,
  ActionProduct,
  ButtonNeed,
  IconStore,
  WrapPrecio,
  ButtonRedeem,
  CoinPrecio,
} from "./style";
import coinSVG from "assets/icons/coin.svg";
import { AppContext } from "appContext";
import { formatNumber } from "Utils";

const canBuyProduct = (userCoin, costProduct) => {
  let result = {
    canBuy: false,
    need: 0,
  };
  if (userCoin - costProduct >= 0) {
    result.canBuy = true;
  } else {
    result.canBuy = false;
    result.need = new Intl.NumberFormat("es-AR").format(
      (userCoin - costProduct) * -1
    );
  }
  return result;
};

export default function Product({ data }) {
  const { user, updateCoins } = useContext(AppContext);

  const { canBuy, need } = canBuyProduct(user.coins, data.cost);

  const [bought, setBought] = useState(false);
  const useCoins = () => {
    if (canBuy) {
      updateCoins(data.cost);
      setBought(true);
    }
  };

  return (
    <WrapPruduct>
      <ActionProduct>
        <WrapPrecio>
          {formatNumber(data.cost)}
          <CoinPrecio>
            <img src={coinSVG} alt="coin" />
          </CoinPrecio>
        </WrapPrecio>
        <ButtonRedeem bought={bought} onClick={useCoins}>
          {!bought ? "Redeem now" : "Redeemed"}
        </ButtonRedeem>
      </ActionProduct>
      {!canBuy ? (
        <ButtonNeed>
          You need {need}
          <img src={coinSVG} alt="coin" />
        </ButtonNeed>
      ) : (
        <IconStore></IconStore>
      )}
      <ImageProduct>
        <img src={data.img.url} alt={data.name} />
      </ImageProduct>
      <FooterProduct>
        <div
          style={{
            width: "100%",
            marginBottom: "12px",
            height: "1px",
            background: "#d9d9d9",
          }}
        ></div>
        <PCategory>{data.category}</PCategory>
        <PName>{data.name}</PName>
      </FooterProduct>
    </WrapPruduct>
  );
}
