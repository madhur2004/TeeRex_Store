import React, { use, useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";

function Header() {
  return (
    <div className="fixed top-0 left-0 w-full">
      <div className="h-15 bg-blue-200 flex justify-between items-center   ">
        <h1 className="ml-2 font-extrabold text-2xl">TeeRex Store</h1>
        <div className=" mr-2 w-40  flex justify-between items-center  gap-x-2">
          <div className="p-1">Product</div>

          <div className="mr-2 p-2 w-15 rounded-xl bg-gray-100 ">
            <button>
              <FaCartArrowDown
                className="justify-self-center w-10
            h-8"
              />
            </button>
          </div>
        </div>
      </div>
      <div></div>
      {/* <div className="h-15 bg-pink-200 flex justify-center  ">
        <div className=" flex mt-1 p-1  ">
          <input
            type="text"
            className="border-1 p-3 mt-2 h-10 rounded-l-lg "
            placeholder="Search Product..."
          />
          <button type="submit">
            <IoSearchOutline className="border-1 mt-2 h-10 w-10 rounded-r-lg " />
          </button>
        </div>
      </div> */}
    </div>
  );
}
export default Header;
