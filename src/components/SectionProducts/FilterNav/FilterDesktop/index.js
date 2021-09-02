import React from "react";

import ButtonsFilter from "components/SectionProducts/common/ButtonsFilter";
import { Wrapper, WrapNext, CantProduct } from "../../common/style";
import ButtonNextPrev from "components/SectionProducts/common/ButtonNextPrev";
import Divider from "components/Common/Divider";

export default function FilterDesktop({
  cantProducts,
  nextPage,
  prevPage,
  cantProdutPerPage,
  page,
}) {
  function getCantProductThatShow() {
    let numberofproducts = (page + 1) * cantProdutPerPage;

    // If number of products exceeds cant products, it fixed to greater.
    numberofproducts =
      numberofproducts > cantProducts ? cantProducts : numberofproducts;

    return numberofproducts;
  }
  return (
    <>
      <Wrapper>
        <CantProduct>
          <p>
            {getCantProductThatShow()} of {cantProducts} products
          </p>
        </CantProduct>
        <div className="line-divider"></div>
        <ButtonsFilter />
        <WrapNext>
          {page > 0 && (
            <ButtonNextPrev
              style={{ marginRight: "10px" }}
              onClick={prevPage}
              type="prev"
            />
          )}
          <ButtonNextPrev onClick={nextPage} type="next" />
        </WrapNext>
      </Wrapper>
      <Divider color="#d9d9d9" width={"calc(100% - 48px)"} margin="24px auto" />
    </>
  );
}
