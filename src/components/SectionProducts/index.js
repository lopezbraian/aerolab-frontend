import React, { useState, useEffect, useContext } from "react";

import { Wrapper, WrapperProducts } from "./style";
import Filter from "components/Filter";
import getProducts from "api/products";
import { AppContext } from "appContext";
import Products from "components/Products";
import usePagination from "components/hooks/usePagination";
import useGetProduct from "components/hooks/useGetProduct";

const Divider = () => {
  return (
    <div
      style={{
        height: "1px",
        width: "calc(100% - 48px)",

        backgroundColor: "gray",
        margin: "24px auto",
      }}
    ></div>
  );
};

const CANT_PAGE = 16;

export default function SectionProducts() {
  const { filter } = useContext(AppContext);
  const [data, loaded] = useGetProduct(filter);
  const [dataForPage, changePage, page] = usePagination(CANT_PAGE, data);

  return (
    <Wrapper>
      <Filter
        changePage={changePage}
        cant_page={CANT_PAGE}
        page={page}
        cantProductos={data.length}
      />
      <Divider></Divider>
      <WrapperProducts>
        <Products loaded={loaded} products={dataForPage} />
      </WrapperProducts>
    </Wrapper>
  );
}
