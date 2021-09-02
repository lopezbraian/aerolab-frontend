import { useState, createContext } from "react";
export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    name: "Jhon Kite",
    coins: 134600,
  });

  const updateCoins = (coinsUsed) => {
    setUser({
      ...user,
      coins: user.coins - coinsUsed,
    });
  };
  const value = {
    user,
    updateCoins,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
