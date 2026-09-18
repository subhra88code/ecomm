import { useQuery } from "@tanstack/react-query"
import { getAllproductApi, getProductByCatagory, getProductCatagories } from "../api/productApis"
import { useEffect, useState } from "react"

export const useAllProduct = ()=>{
    const [search, setSearch] = useState(null)
    const [debounceSearch, setdebounceSearch] = useState(null)

    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setdebounceSearch(search)
        },700)

        return ()=> clearTimeout(timeOut)
    },[search])

    let {data, isPending , errors} = useQuery({
        queryKey: ['products', debounceSearch],
        queryFn: ()=> getAllproductApi(debounceSearch)
    })
    // console.log("products data",data);
    
    return {
        data,
        isPending,
        errors,
        search,
        setSearch
    }
} 

export const useAllcatagories = ()=>{
    let {data, isPending , errors} = useQuery({
        queryKey: ['catagories'],
        queryFn: getProductCatagories,
    })
     console.log("catagories data",data);

    return {
        data,
        isPending,
        errors
    }
}

export const useProductsByCatagory = ()=>{
    const [category, setCategory] = useState('all')
    console.log(category);
    let {data} = useQuery({
        queryKey: ["catagoryProduct",category],
        queryFn: ()=> getProductByCatagory(category),
        enabled: category !== "all"
    })

    
    

    return { 
        data,
        category,
        setCategory
    }
}