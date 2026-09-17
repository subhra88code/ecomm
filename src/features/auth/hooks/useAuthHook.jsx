import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { loginUserApi } from "../api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";
import { toast } from "react-toastify";
export const useAuth = () => {
    const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const registerFrom = (data) => {
    console.log(data);


  };
  const loginForm = async (data) => {
    
   try {
     //api call
    let responce = await loginUserApi(data)
    dispatch(addUser(responce))
    toast.success("Logedin successfully")
    navigate('/main')
   } catch (error) {
    console.log(error);
    
   }
    
  };
  let navigate = useNavigate();

  return {
    navigate,
    register,
    handleSubmit,
    errors,
    reset,
    loginForm,
    registerFrom,
  };
};
