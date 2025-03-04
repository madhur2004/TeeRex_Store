import "./App.css";
import Header from "./Header";
import Filter from "./Filter";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Product from "./Product";
import { IoSearchOutline } from "react-icons/io5";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilterProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({
    gender: "",
    color: "",
    type: "",
  });
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
        );
        const data = await res.json();
        setProducts(data);
        setFilterProducts(data);
      } catch (error) {
        console.log("Error featching product: ", error);
      }
    };
    fetchProduct();
  }, []);
  useEffect(() => {
    applyFilter();
  }, [products, searchQuery, filters]);
  const applyFilter = () => {
    let result = [...products];
    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.color.toLowerCase().includes(query) ||
          product.type.toLowerCase().includes(query)
      );
    }
    //Apply filter
    if (filters.gender.length > 0) {
      result = result.filter((product) =>
        filters.gender.includes(product.gender)
      );
    }
    if (filters.color.length > 0) {
      result = result.filter((product) =>
        filters.color.includes(product.color)
      );
    }
    if (filters.type.length > 0) {
      result = result.filter((product) => filters.type.includes(product.type));
    }
    result = result.filter(
      (product) =>
        product.price >= filters.priceRange.min &&
        product.price <= filters.priceRange.max
    );
    setFilterProducts(result);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    applyFiltersAndSearch();
  };
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <Header />
      <div className="fixed top-15 left-0 w-full bg-pink-400 h-15 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] ">
        <form
          onSubmit={handleSearch}
          className="h-10 w-100 justify-self-center"
        >
          <div className="flex p-3">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 border rounded-tl-lg rounded-bl-lg bg-pink-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="border-1  w-10   rounded-br-lg rounded-tr-lg"
              aria-label="Search"
            >
              <IoSearchOutline className="h-9 w-9 rounded-br-lg" />
            </button>
          </div>
        </form>
      </div>

      <Filter onfilterChange={handleFilterChange} product={filteredProducts} />
      <Footer />
      {/* <Product products={filteredProducts} /> */}
    </>
  );
}

export default App;
