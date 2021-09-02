import React from "react";
import styled from "styled-components";
import ButtonNext from "../../common/ButtonNextPrev";
import ButtonsFilter from "./ButtonsFilter";
const P = styled.p`
  margin: 0;
  font-size: 1.7rem;
`;
const WrapTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export default function FilterMobile({
  nextPage,
  prevPage,
  cantProdutPerPage,
  page,
  cantProducts,
}) {
  function getCantProductThatShow() {
    let numberofproducts = (page + 1) * cantProdutPerPage;

    // If number of products exceeds cant products, it fixed to greater.
    numberofproducts =
      numberofproducts > cantProducts ? cantProducts : numberofproducts;

    return numberofproducts;
  }
  return (
    <div>
      <WrapTop>
        <P>{getCantProductThatShow()} of {cantProducts} </P>
        <ButtonNext onClick={prevPage} type="prev" />
        <ButtonNext onClick={nextPage} type="next" />
      </WrapTop>
      <ButtonsFilter />
    </div>
  );
}
