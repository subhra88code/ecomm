import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";
import { toast } from "react-toastify";

export const loginUserAction = createAsyncThunk('auth/login', async (credentials , thunkApi)=>{
    console.log("thunk action trigered");
    
     try {
            let res = await api.post("/auth/login" , credentials);;
            localStorage.setItem("accessToken",res.data.accessToken)
            return res.data
            
        } catch (error) {
            return thunkApi.rejectWithValue("login failed")
            
        }
})

export const hydrateUserAction = createAsyncThunk('/auth/hydrate', async (_,thunkApi)=>{
    let token = localStorage.getItem("accessToken")
    try {
        let res = await api.get("/auth/me" , {
            headers: {
                     'Authorization': `Bearer ${token}`, // Pass JWT via Authorization header
  }
        });
        return res.data
        
    } catch (error) {
        toast.error("hydration failed")
        return thunkApi.rejectWithValue("hydration failed")      
    }
})