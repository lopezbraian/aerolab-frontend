import styled from "styled-components";
import coinSVG from "assets/icons/coin.svg";

export const CoinStyle = styled.div`
  border-radius: 100px;
  padding: 0 13px;
  display: flex;
  align-items: center;
  height: 48px;
  background-color: #ededed;
  .number {
    display: flex;
    align-items: center;
    margin: 0;
    font-size: 24px;
    font-weight: 400;
    color: #616161;
    margin-right: 5px;
  }
  .image {
    width: 30px;
    height: 30px;
    background: url(${coinSVG});
    background-position: center 2px;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;
