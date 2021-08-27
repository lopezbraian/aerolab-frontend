import React from "react";
import Product from "components/Product";
import ProductSkeleton from "components/Product/ProductSkeleton";
export default function Products({ products, loaded }) {
  function renderskeleton() {
    const array = [0, 1, 2, 3, 4, 5, 6, 7];
    return array.map((v) => <ProductSkeleton key={v}></ProductSkeleton>);
  }
  return (
    <>
      {!loaded ? (
        <>{renderskeleton()}</>
      ) : (
        <>
          {products.map((p, index) => {
            return <Product data={p} key={index} />;
          })}
        </>
      )}
    </>
  );
}
