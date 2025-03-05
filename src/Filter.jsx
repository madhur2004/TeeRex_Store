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
  //  filter option Gender | Color | Type | Price Range up to
  //define Gender Filter options
  const genderOptions = ["Men", "Women"];
  // define color options of filter
  const colorOptions = ["Red", "Blue", "Green", "Yellow", "Pink"];
  // define type options of filter
  const typeOptions = ["Polo", "Hoodies", "Basic"];
  // apply filters
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
  // Deifne Price range function
  const handlePriceChange = (min, max) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: { min, max },
    }));
  };
  //  function for clear all filters
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
      {/* clear all selected Filter */}
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
          {/* Gender of filter */}
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
          {/* Color of filter */}
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
          {/* Type of Filter */}
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
        {/* Filterd Items pass to Product Component */}
        <div className="h-170  ml-2 mt-1  w-350  overflow-y-scroll custom-scrollbar  ">
          <Product products={product} />
        </div>
      </div>
    </>
  );
}
export default Filter;
