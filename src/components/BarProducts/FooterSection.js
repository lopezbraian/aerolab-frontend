import React from "react";

import { Wrapper, WrapNext, CantProduct } from "./style";
import ButtonNextPrev from "components/BarProducts/ButtonNextPrev";
import Divider from "components/Common/Divider";

export default function FooterSection({
  cantProductos,
  nextPage,
  prevPage,
  cant_page,
  page,
}) {
  let numberofproducts = (page + 1) * cant_page;

  //SI SE PASA DEL NUMBERO MAXIMO DE CANTIDAD DE PRODUCTOS SE CORRIJE AL MAXIMO
  numberofproducts =
    numberofproducts > cantProductos ? cantProductos : numberofproducts;
  return (
    <>
      <Wrapper>
        <CantProduct>
          <p>
            {numberofproducts} of {cantProductos} products
          </p>
        </CantProduct>
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
