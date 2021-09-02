import React, { useContext } from "react";

import { Wrapper, WrapperProducts } from "./style";
import { FilterContext } from "context/filterContext";
import usePagination from "components/hooks/usePagination";
import useGetProduct from "components/hooks/useGetProduct";


import Products from "components/Products";
import FilterNav from "./FilterNav";

const CANT_PAGE = 16;

export default function SectionProducts() {
  const { filter } = useContext(FilterContext);
  const [data, loaded] = useGetProduct(filter);
  const [dataForPage, nextPage, prevPage, page] = usePagination(
    CANT_PAGE,
    data
  );

  return (
    <Wrapper>
      <FilterNav nextPage={nextPage}
        prevPage={prevPage}
        cantProdutPerPage={CANT_PAGE}
        page={page}
        cantProducts={data.length}
      />
      <WrapperProducts>
        <Products loaded={loaded} products={dataForPage} />
      </WrapperProducts>
      {/* <FooterSection
        nextPage={nextPage}
        prevPage={prevPage}
        cant_page={CANT_PAGE}
        page={page}
        cantProducts={data.length}
      /> */}
    </Wrapper>
  );
}
