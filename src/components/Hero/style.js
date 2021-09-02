import styled from "styled-components";
import headerImage from "../../assets/header-x1.png";

export const HeroStyle = styled.div`
  background: url(${headerImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  h2 {
    font-size: 32px;
    margin: 0;
    margin-left: 10px;
    color: #ffffff;
  }
  @media screen and (min-width: 768px) {
    height: 413px;
    align-items: flex-end;
    justify-content: flex-start;
    h2 {
      font-size: 64px;
      margin: 0;
      margin-left: 20px;
      margin-bottom:50px;
    }
  }
`;
