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
import { UserContext } from "context/userContext";
import { formatNumber } from "Utils";
import Divider from "components/Common/Divider";

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
  const { user, updateCoins } = useContext(UserContext);

  const { canBuy, need } = canBuyProduct(user.coins, data.cost);

  const [bought, setBought] = useState(false);

  const useCoins = () => {
    if (canBuy) {
      updateCoins(data.cost);
      setBought(true);
    }
  };

  return (
    <WrapPruduct bought={bought}>
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
        <img src={data.img.url} loading="lazy" alt={data.name} />
      </ImageProduct>
      <FooterProduct>
        <Divider width="100%" color="#d9d9d9" margin="0 0 12px 0"></Divider>
        <PCategory>{data.category}</PCategory>
        <PName>{data.name}</PName>
      </FooterProduct>
    </WrapPruduct>
  );
}
