import styled from "styled-components";
import buyBlue from "assets/icons/buy-blue.svg";
import buyLight from "assets/icons/buy-white.svg";

export const IconStore = styled.span`
  position: absolute;
  background: url(${buyBlue});
  background-size: cover;
  width: 44px;
  height: 44px;
  right: 12px;
  z-index: 2;
`;
export const ButtonNeed = styled.div`
  position: absolute;
  right: 12px;
  z-index: 2;
  display: flex;
  align-items: center;
  opacity: 0.8;
  background: ${(props) => props.theme.text.primary};
  padding: 5px 10px;
  border-radius: 100px;
  font-size: 14px;
  color: #ffffff;
  img {
    margin-left: 5px;
    width: 25px;
    height: 25px;
  }
`;
export const WrapPrecio = styled.div`
  display: flex;
  align-items: center;
  font-size: 36px;
  color: #ffffff;
`;

export const CoinPrecio = styled.span`
  margin-top: 15px;
  margin-left: 5px;
`;
export const ActionProduct = styled.div`
  position: absolute;
  display: none;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  top: 0;
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(
      -180deg,
      ${(props) => props.theme.colors.primary} 0%,
      #25bbf1 100%
    );
    opacity: 1;
    z-index: -1;
    opacity: 0.8;
  }
`;

export const ButtonRedeem = styled.button`
  background: #ffffff;
  width: 228px;
  height: 42px;
  border: none;
  font-size: 18px;
  color: ${(props) => props.theme.text.primary};
  cursor: pointer;
  border-radius: 100px;
`;

export const WrapPruduct = styled.div`
  width: 276px;
  height: 276px;
  background-color: #ffffff;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 12px;
  position: relative;
  transition: transform 0.4s ease-in-out;
  &:hover ${ActionProduct} {
    display: flex;
  }
  &:hover {
    transform: translateY(-10px);
    box-shadow: 12px 12px 40px 0 rgba(0, 0, 0, 0.5);
  }
  &:hover ${IconStore} {
    background: url(${buyLight});
  }
`;

export const FooterProduct = styled.div`
  padding: 12px;
  p {
    margin: 0;
    text-align: left;
  }
`;
export const ImageProduct = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const PCategory = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.text.secondary};
`;

export const PName = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.text.primary};
`;
