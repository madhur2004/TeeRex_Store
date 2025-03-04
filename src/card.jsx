import { useState } from "react";

export const Card = ({ product }) => {
  //console.log({ product });
  const { imageURL, id, price, name, color, gender, type } = product;
  const [addToCart] = useState([]);

  const handleAddToCart = () => {
    addToCart(product);
    console.log("add Ite,", addToCart(product));
  };

  return (
    <>
      <li>
        <div
          className="h-57 w-104 p-2 ml-1 mt-2 bg-gray-200 rounded-2xl  "
          id="container"
        >
          <div>
            <h3>{name}</h3>
            <img
              className="h-35 w-90 justify-self-center rounded-4xl"
              src={imageURL}
              alt={id}
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="h-5 w-5 p-4">Rs.{price}</div>
            {/* <button className="bg-gray-700 rounded-lg text-white p-2 mt-3 mr-8">
          Add To Cart
        </button> */}
            <span className="text-gray-500 text-sm mt-5">
              {gender} | {color}
            </span>
            {/* <button
              onClick={handleAddToCart}
              className="w-30 mt-2 bg-blue-600 text-white py-2 px-1 rounded-md hover:bg-blue-700 transition-colors"
            >
              Add to Cart
            </button> */}
          </div>
        </div>
      </li>
    </>
  );
};
