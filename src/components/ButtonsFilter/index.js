import { AppContext } from "appContext";
import React, { useContext, useState } from "react";
import { Button, WrapButtons } from "./style";

export default function ButtonsFilter() {
  const { filter, setFilter } = useContext(AppContext);

  const [keyActive, setKeyActive] = useState(filter);
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

  const changeButtonActive = (keyFilter) => {
    const newButtonData = Object.assign({}, buttonsData);
    newButtonData[keyActive].active = false;
    newButtonData[keyFilter].active = true;
    setFilter(keyFilter);
    setKeyActive(keyFilter);
    setButtonsData(newButtonData);
  };
  return (
    <WrapButtons>
      {Object.keys(buttonsData).map((k, index) => (
        <li key={index} onClick={() => changeButtonActive(k)}>
          <Button active={buttonsData[k].active}>{buttonsData[k].name}</Button>
        </li>
      ))}
    </WrapButtons>
  );
}
