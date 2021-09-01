import React from "react";
import arrowRight from "assets/icons/arrow-right.svg";
import arrowLeft from "assets/icons/arrow-left.svg";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 50%;
  border: none;
  padding: 0;
  margin: 0;
  background: ${(props) =>
    props.type === "next" ? `url(${arrowRight})` : `url(${arrowLeft})`};
  width: 48px;
  height: 48px;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;

export default function ButtonNext({ ...props }) {
  return <Button {...props}></Button>;
}
