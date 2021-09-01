import { createContext, useState } from "react";

export const FilterContext = createContext({ filter: "recent" });

export default function FilterContextProvider({ children }) {
  const [filter, setFilter] = useState("recent");

  const changeFilter = (value) => {
    setFilter(value);
  };

  const value = {
    filter,
    changeFilter,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}
