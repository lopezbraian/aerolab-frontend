import React from "react";

import ButtonsFilter from "components/ButtonsFilter";
import { Wrapper, WrapSort, WrapNext, CantProduct } from "./style";
import ButtonNext from "components/ButtonNext";

export default function Fiter({ cantProductos, changePage, cant_page, page }) {
  let numberofproducts = (page + 1) * cant_page;

  //SI SE PASA DEL NUMBERO MAXIMO DE CANTIDAD DE PRODUCTOS SE CORRIJE AL MAXIMO
  numberofproducts =
    numberofproducts > cantProductos ? cantProductos : numberofproducts;
  return (
    <Wrapper>
      <CantProduct>
        <p>
          {numberofproducts} of {cantProductos} products
        </p>
      </CantProduct>
      <div className="line-divider"></div>
      <WrapSort>
        <p>Sort by:</p>
        <ButtonsFilter />
      </WrapSort>
      <WrapNext>
        <ButtonNext onClick={changePage} />
      </WrapNext>
    </Wrapper>
  );
}
