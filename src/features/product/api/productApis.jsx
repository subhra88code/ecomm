import { api } from "../../../config/api";

export const getAllproductApi =  async (search)=>{

    try {
        let url = search? `/products/search?q=${search}` : '/products?limit=100'
        let res = await api.get(url )
         
        return res.data
       
        
    } catch (error) {
        console.log("this is products error :",error);
    }
}

export const getProductCatagories = async ()=>{

    try {
        let res = await api.get('/products/categories')
        return res.data
        
    } catch (error) {
        console.log("this is catagories error :",error);
    }
}

export const getProductByCatagory = async (cat)=>{
    try {
        let res = await api.get(`/products/category/${cat}`)
        return res.data;
    } catch (error) {
        console.log(error);
        
    }
}