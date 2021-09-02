import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 20px;
  margin: 0 20px;
  @media screen and (min-width:768px) {
    padding-top: 67px;
    margin: 0 132px;
  }
`;

export const WrapperProducts = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px , 1fr));
  gap: 20px;
  @media screen and (min-width:768px) {
    grid-template-columns: repeat(4,  1fr);
    gap: 24px;
    margin-bottom: 64px;
  }
`;
