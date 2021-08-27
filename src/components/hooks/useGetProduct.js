import { useEffect, useState } from "react";

import getProductsApi from "api/products";

const sortByActiveFilter = (arr = [], filter) => {
  if (filter === "recent") return arr;
  if (filter === "l_price") {
    return arr.sort((a, b) => a.cost - b.cost);
  } else {
    return arr.sort((a, b) => b.cost - a.cost);
  }
};

export default function useGetProduct(filter) {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoaded(false);
      try {
        const result = await getProductsApi();
        const resultJSON = await result.json();

        const dataFilter = sortByActiveFilter(resultJSON, filter);
        setData(dataFilter);
        setLoaded(true);
      } catch {}
    };
    getProduct();
  }, [filter]);

  return [data, loaded];
}
