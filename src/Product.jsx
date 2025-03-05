import axois from "axios";
import { useEffect, useState } from "react";
import { Card } from "./card";
import { IoSearchOutline } from "react-icons/io5";
function Product({ products }) {
  return (
    <>
      <ul>
        <div className="flex flex-wrap grid-cols-4 gap-1 ">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </ul>
    </>
  );
}
export default Product;
