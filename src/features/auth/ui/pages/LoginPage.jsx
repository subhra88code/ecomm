import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../../hooks/useAuthHook";

const LoginPage = () => {
  let {navigate , register , handleSubmit , errors , loginForm } = useAuth()
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Login
        </h1>

        <form 
        onSubmit={handleSubmit(loginForm)} 
        className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>

            <input
              {...register("username", {
                required: "username is required",
              })}
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
             {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )} 
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              {...register("password", {
                required: "password is required",
              })}
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 font-medium cursor-pointer hover:underline"
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
// <div>
//   <h1>count is {count}</h1>
//   <button onClick={()=> dispatch(decrement())}>decrement</button>
//   <button onClick={()=> dispatch(increment())}>increment</button>
//   <br /> <br />
//   <input type="text" placeholder="Enter the number" onChange={(e)=> setInput(e.target.value)}/>
//   <button onClick={()=> dispatch(incrementByValue(input))}>Add</button>
// </div>
