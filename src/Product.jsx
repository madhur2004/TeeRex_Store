import axois from "axios";
import { useEffect, useState } from "react";
import { Card } from "./card";
import { IoSearchOutline } from "react-icons/io5";
function Product({ products }) {
  // const [data, setData] = useState([]);
  // const [records, setRecords] = useState([]);
  // //console.log(data);
  // const API =
  //   "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";

  // const getProductData = async () => {
  //   try {
  //     const res = await axois.get(API);
  //     // console.log(res.data);
  //     // console.log(res);

  //     setData(res.data);
  //     setRecords(res.data);
  //     //console.log(setData(res.data));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const Filter = (e) => {
  //   setRecords(
  //     data.filter((f) => f.name.toLowerCase().includes(event.target.value))
  //   );
  // };

  // useEffect(() => {
  //   getProductData();
  //   // console.log(getProductData());
  // }, []);

  // return (
  //   <>
  //     {/* <div className="fixed">
  //       <input type="text" onChange={Filter} placeholder="Search product" />
  //     </div> */}
  //     <div>
  //       <div className="h-15 bg-pink-200 flex justify-center  rounded-l-lg  fixed top-15 left-0 w-full  ">
  //         <div className=" flex mt-1 p-1  ">
  //           <input
  //             type="text"
  //             className="border-1 p-3 mt-2 h-10 rounded-l-lg "
  //             placeholder="Search Product..."
  //             onChange={Filter}
  //           />
  //           <button>
  //             <IoSearchOutline className="border-1 mt-2 h-10 w-10 rounded-r-lg " />
  //           </button>
  //         </div>
  //       </div>
  //       <ul className="flex flex-wrap grid-cols-4 gap-1 ">
  //         {products.map((currProduct) => {
  //           return <Card key={currProduct.id} productData={currProduct} />;
  //         })}
  //       </ul>
  //     </div>
  //   </>
  // );
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
