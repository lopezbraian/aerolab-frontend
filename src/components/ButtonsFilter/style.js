import styled from "styled-components";

export const Button = styled.button`
  border: none;
  font-size: 18px;
  cursor: pointer;
  width: 163px;
  height: 48px;
  border-radius: 100px;
  background-color: ${(props) => (props.active ? "#0ad4fa" : "#EDEDED")};
  color: ${(props) => (props.active ? "white" : "#A9A9A9")};
`;

export const WrapButtons = styled.ul`
  display: flex;

  li {
    list-style: none;
    margin-right: 24px;
  }
`;

export const WrapSort = styled.div`
  display: flex;
  align-items: center;
  p {
    color: #a9a9a9;
    font-size: 24px;
  }
`;
