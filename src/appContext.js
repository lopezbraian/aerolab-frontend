import { useState, createContext } from "react";
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [filter, setFilter] = useState("recent");
  const [user, setUser] = useState({
    name: "Jhon Kite",
    coins: 1600,
  });

  const updateCoins = (coinsUsed) => {
    setUser({
      ...user,
      coins: user.coins - coinsUsed,
    });
  };
  const value = {
    filter,
    setFilter,
    user,
    updateCoins,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
