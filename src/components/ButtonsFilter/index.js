import { FilterContext } from "context/filterContext";
import React, { useContext, useState } from "react";
import { Button, WrapButtons, WrapSort } from "./style";

export default function ButtonsFilter() {
  const { filter, changeFilter } = useContext(FilterContext);

  const [buttonsData, setButtonsData] = useState({
    recent: {
      name: "Most recent",
      active: filter === "recent",
    },
    l_price: {
      name: "Lowest price",
      active: filter === "l_price",
    },
    h_price: {
      name: "Highest Price",
      active: filter === "h_price",
    },
  });

  const updateFilterActive = (newFilter) => {
    changeFilter(newFilter);
  };
  const updateButton = (keyFilter) => {
    const newButtonData = Object.assign({}, buttonsData);
    newButtonData[filter].active = false;
    newButtonData[keyFilter].active = true;
    setButtonsData(newButtonData);
  };
  const changeButtonActive = (keyFilter) => {
    updateButton(keyFilter);
    updateFilterActive(keyFilter);
  };
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
