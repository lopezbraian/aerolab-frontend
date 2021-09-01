import React from "react";

import ButtonsFilter from "components/ButtonsFilter";
import { Wrapper, WrapNext, CantProduct } from "./style";
import ButtonNextPrev from "components/BarProducts/ButtonNextPrev";
import Divider from "components/Common/Divider";

export default function HeaderSection({
  cantProducts,
  nextPage,
  prevPage,
  cant_page,
  page,
}) {
  let numberofproducts = (page + 1) * cant_page;

  //SI SE PASA DEL NUMBERO MAXIMO DE CANTIDAD DE PRODUCTOS SE CORRIJE AL MAXIMO
  numberofproducts =
    numberofproducts > cantProducts ? cantProducts : numberofproducts;
  return (
    <>
      <Wrapper>
        <CantProduct>
          <p>
            {numberofproducts} of {cantProducts} products
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
