import React from "react";

import { Wrapper, WrapNext, CantProduct } from "./style";
import ButtonNextPrev from "components/BarProducts/ButtonNextPrev";
import Divider from "components/Common/Divider";

export default function FooterSection({
  cantProductos,
  changePage,
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
          <ButtonNextPrev onClick={changePage} />
        </WrapNext>
      </Wrapper>
      <Divider color="#d9d9d9" width={"calc(100% - 48px)"} margin="24px auto" />
    </>
  );
}
