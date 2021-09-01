import React, { useContext } from "react";

import { Wrapper, WrapperProducts } from "./style";
import HeaderSection from "components/BarProducts/HeaderSection";
import FooterSection from "components/BarProducts/FooterSection";
import { FilterContext } from "context/filterContext";
import Products from "components/Products";
import usePagination from "components/hooks/usePagination";
import useGetProduct from "components/hooks/useGetProduct";

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
      <HeaderSection
        nextPage={nextPage}
        prevPage={prevPage}
        cant_page={CANT_PAGE}
        page={page}
        cantProducts={data.length}
      />
      <WrapperProducts>
        <Products loaded={loaded} products={dataForPage} />
      </WrapperProducts>
      <FooterSection
        nextPage={nextPage}
        prevPage={prevPage}
        cant_page={CANT_PAGE}
        page={page}
        cantProducts={data.length}
      />
    </Wrapper>
  );
}
