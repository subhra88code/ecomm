import React from "react";
import { useAllProduct, useProductsByCatagory } from "../../hooks/useProductHooks";
import ProductCard from "../components/ProductCard";
import FilterComponent from "../components/FilterComponent ";

const ProductPage = () => {
  let { data, isPending, errors ,search , setSearch} = useAllProduct();

  let {data : getProductByCatagory , category , setCategory } = useProductsByCatagory()
  console.log(getProductByCatagory);
  
  
  

  if (isPending) return <h1>Products loading</h1>;
  return (
    <div>
      <FilterComponent search={search} setSearch={setSearch} category={category}  setCategory={setCategory}/>
      <div className="grid grid-cols-4 gap-5">
        {getProductByCatagory ? getProductByCatagory.products.map((product)=>{
            return <ProductCard product={product} key={product.id} />
        }) : data.products.map((product)=>{
            return <ProductCard product={product} key={product.id} />
        })}
      </div>
    </div>
  );
};

export default ProductPage;
