import React from "react";
import styled, { keyframes } from "styled-components";

const animation = keyframes`

  0%{
    background-color: #ffffff;
  }
  100%{
    background-color: #f9f9f9;
  }

`;
const WrapperSkeleton = styled.div`
  width: 276px;
  height: 276px;
  background-color: #ffffff;
  animation-name: ${animation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

export default function ProductSkeleton() {
  return <WrapperSkeleton></WrapperSkeleton>;
}
