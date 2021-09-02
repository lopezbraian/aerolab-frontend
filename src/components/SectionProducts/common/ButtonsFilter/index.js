import useChangeFilter from "components/hooks/useChangeFilter";
import React from "react";
import {  WrapButtons, WrapSort } from "./style";
import Button from '../Button'
export default function ButtonsFilter() {
  const [buttonsData, changeButtonActive] = useChangeFilter();
  return (
    <WrapSort>
      <p>Sort by:</p>
      <WrapButtons>
        {Object.keys(buttonsData).map((k, index) => (
          <li key={index} onClick={() => changeButtonActive(k)}>
            <Button active={buttonsData[k].active}>
              {buttonsData[k].name}
            </Button>
          </li>
        ))}
      </WrapButtons>
    </WrapSort>
  );
}
