import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  padding: 24px;
  height: 48px;
  align-items: center;
  p {
    margin: 0;
  }

  .line-divider {
    width: 1px;
    height: 49px;
    background-color: gray;
    margin: 0 24px;
  }
`;
export const CantProduct = styled.div`
  color: ${(props) => props.theme.text.primary};
  font-size: 24px;
`;

export const WrapNext = styled.div`
  margin-left: auto;
`;
