import { useContext, useState } from "react";
import { FilterContext } from "context/filterContext";

export default function useChangeFilter() {
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

  return [buttonsData , changeButtonActive]
}
