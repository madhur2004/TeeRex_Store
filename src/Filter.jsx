import { useEffect, useState } from "react";
import Product from "./Product";
import "./index.css";
import { FaFilter } from "react-icons/fa";
import { RiDeleteBin3Fill } from "react-icons/ri";
function Filter({ onfilterChange, product }) {
  const [filters, setFilters] = useState({
    gender: "",
    color: "",
    type: "",
    priceRange: { min: 0, max: 1000 },
  });
  // Available filter option
  const genderOptions = ["Men", "Women"];
  const colorOptions = ["Red", "Blue", "Green", "Yellow", "Pink"];
  const typeOptions = ["Polo", "Hoodies", "Basic"];
  useEffect(() => {
    onfilterChange(filters);
  }, [filters, onfilterChange]);
  const handleCheckboxChange = (category, value) => {
    setFilters((prev) => {
      const currentValue = [...prev[category]];
      if (currentValue.includes(value)) {
        return {
          ...prev,
          [category]: currentValue.filter((item) => item !== value),
        };
      } else {
        return {
          ...prev,
          [category]: [...currentValue, value],
        };
      }
    });
  };
  const handlePriceChange = (min, max) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: { min, max },
    }));
  };
  const clearFilters = () => {
    setFilters({
      gender: [],
      color: [],
      type: [],
      priceRange: { min: 0, max: 1000 },
    });
  };
  return (
    <>
      {/* clear */}
      <div className="flex mt-30  ">
        <div className="  w-50  " id="choice">
          {" "}
          <div className="bg-amber-700 rounded-tr-lg shadow-md  p-1 w-40 ">
            <div className="flex justify-between items-center p-2 ">
              <FaFilter className="h-5 w-5" />
              <button
                onClick={clearFilters}
                className=" p-2 hover:text-red-400 "
              >
                <RiDeleteBin3Fill className="h-5 w-5" />
              </button>
            </div>
          </div>
          {/* Gender */}
          <div className="  bg-amber-500 w-40 p-3">
            <h3 className="font-medium mb-2">Gender</h3>
            <div className="space-y-2">
              {genderOptions.map((gender) => (
                <label key={gender} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={filters.gender.includes(gender)}
                    onChange={() => {
                      handleCheckboxChange("gender", gender);
                      console.log(gender);
                    }}
                  />
                  {gender}
                </label>
              ))}
            </div>
          </div>
          {/* Color */}
          <div className=" bg-amber-400 w-40 p-3 ">
            <h3 className="font-medium mb-2">Color</h3>
            <div className="space-y-2">
              {colorOptions.map((color) => (
                <label key={color} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={filters.color.includes(color)}
                    onChange={() => handleCheckboxChange("color", color)}
                  />
                  {color}
                </label>
              ))}
            </div>
          </div>
          {/* Type */}
          <div className="bg-amber-500 w-40 p-3">
            <h3 className="font-medium mb-2">Type</h3>
            <div className="space-y-2">
              {typeOptions.map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={filters.type.includes(type)}
                    onChange={() => handleCheckboxChange("type", type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>
          {/* Price Range Filter */}
          <div className="bg-amber-400 w-40 rounded-br-lg p-3 ">
            <h3 className="font-medium mb-2">Price Range</h3>
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="priceRange"
                  className="mr-2"
                  checked={
                    filters.priceRange.min === 0 &&
                    filters.priceRange.max === 250
                  }
                  onChange={() => handlePriceChange(0, 250)}
                />
                ₹0 - ₹250
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="priceRange"
                  className="mr-2"
                  checked={
                    filters.priceRange.min === 251 &&
                    filters.priceRange.max === 450
                  }
                  onChange={() => handlePriceChange(251, 450)}
                />
                ₹251 - ₹450
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="priceRange"
                  className="mr-2"
                  checked={
                    filters.priceRange.min === 451 &&
                    filters.priceRange.max === 1000
                  }
                  onChange={() => handlePriceChange(451, 1000)}
                />
                ₹451 and above
              </label>
            </div>
          </div>
        </div>
        <div className="h-170  ml-2 mt-1  w-350  overflow-y-scroll custom-scrollbar  ">
          <Product products={product} />
        </div>
      </div>

      {/* end */}
      {/*<div className="flex mt-31  ">
        <div>
          <div className=" h-115 w-50 sticky top-31  left-0   " id="choice">
            <div className="bg-orange-500 h-30 rounded-tr-2xl">
              <div className="justify-self-center w-30 ">
                <h3 className=" text-3xl font-bold mb-2 ">Colour</h3>
                <button>
                  <input type="checkbox" name="" id="" />
                  Red
                </button>
                <br />
                <button>
                  <input type="checkbox" name="" id="" />
                  Blue
                </button>
                <br />
                <button>
                  <input type="checkbox" name="" id="" />
                  Green
                </button>
              </div>
            </div>
            <div className=" bg-orange-400 h-25">
              <div className="justify-self-center  w-30  ">
                <h3 className=" text-3xl font-bold mb-2 ">Gender</h3>
                <button>
                  <input type="checkbox" name="" id="" />
                  Men
                </button>
                <br />
                <button>
                  <input type="checkbox" name="" id="" />
                  Women
                </button>
              </div>
            </div>
            <div className=" bg-orange-500 h-30">
              <div className="justify-self-center w-30 ">
                <h3 className=" text-3xl font-bold mb-2  ">Price</h3>
                <button>
                  <input type="checkbox" name="" id="" />
                  0-Rs.250
                </button>
                <br />
                <button>
                  <input type="checkbox" name="" id="" />
                  Rs.251-450
                </button>
                <br />
                <button>
                  <input type="checkbox" name="" id="" />
                  Rs.450
                </button>
              </div>
            </div>
            <div className="bg-orange-400  h-30 rounded-br-2xl">
              <div className="justify-self-center  w-30 ">
                <h3 className=" text-3xl font-bold mb-2 ">Type</h3>
                <button>
                  <input type="checkbox" name="" id="" />
                  Polo
                </button>
                <br />
                <button>
                  <input type="checkbox" name="" id="" />
                  Hoodle
                </button>
                <br />
                <button>
                  <input type="checkbox" name="" id="" />
                  Basic
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-141  ml-2 mt-1  w-350  overflow-y-scroll custom-scrollbar  ">*/}
      {/* <Product /> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
export default Filter;
