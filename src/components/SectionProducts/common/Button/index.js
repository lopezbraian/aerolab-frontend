import React from 'react'
import styled from 'styled-components'

export const ButtonStyle = styled.button`
  border: none;
  font-size: 18px;
  cursor: pointer;
  width: ${props => props.size ==='sm' ? '100px': '163px'};
  height: ${props => props.size ==='sm' ? '60px': '48px'};
  border-radius: ${props => props.size ==='sm' ? '20px': '100px'};
  background-color: ${(props) => (props.active ? "#0ad4fa" : "#EDEDED")};
  color: ${(props) => (props.active ? "white" : "#A9A9A9")};
`;

export default function Button({children , ...props}) {
  return (
    <ButtonStyle {...props}>
      {children}
    </ButtonStyle>
  )
}
