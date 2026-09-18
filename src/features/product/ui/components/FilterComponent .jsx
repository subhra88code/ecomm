import React from "react";
import { Search, ChevronDown } from "lucide-react";
import { useAllcatagories } from "../../hooks/useProductHooks";

const FilterComponent = ({search,setSearch , category , setCategory}) => {

let { data, isPending, errors } = useAllcatagories();

if(isPending) return <h1>Catagories loading</h1>
  return (
    <div className="w-full mb-8 flex flex-col sm:flex-row gap-4 justify-between">

      {/* Search Bar */}
      <div className="relative w-full sm:w-1/2">
        <Search
          size={20}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
          type="text"
          placeholder="Search products..."
          className="w-full pl-10 pr-4 py-3
                     border border-gray-200 rounded-xl
                     outline-none
                     focus:ring-2 focus:ring-blue-500
                     focus:border-transparent
                     transition-all"
        />
      </div>

      {/* Category */}
      <div className="relative w-full sm:w-56">
      <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="w-full appearance-none bg-white border border-gray-200
             rounded-xl px-4 py-3 pr-10 text-gray-700 outline-none
             focus:ring-2 focus:ring-blue-500 cursor-pointer"
>
  <option value={'all'} >All Products</option>

  {data.map((cat) => (
    <option key={cat.slug} value={cat.slug}>
      {cat.name}
    </option>
  ))}
</select>
        <ChevronDown
          size={18}
          className="absolute right-3 top-1/2
                     -translate-y-1/2
                     text-gray-400
                     pointer-events-none"
        />
      </div>

    </div>
  );
};

export default FilterComponent;