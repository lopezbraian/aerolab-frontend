import { useState, useEffect } from "react";

export default function usePagination(cantPage, arr) {
  const [page, setPage] = useState(0);
  const totalPage = Math.ceil(arr.length / cantPage);
  const [data, setData] = useState(arr);

  useEffect(() => {
    setData(arr.slice(page * cantPage, page * cantPage + cantPage));
  }, [arr, page, cantPage]);

  const changePage = () => {
    if (page < totalPage - 1) {
      setPage(page + 1);
    } else {
      setPage(0);
    }
  };
  return [data, changePage, page];
}
