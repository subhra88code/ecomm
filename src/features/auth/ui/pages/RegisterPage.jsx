import React from "react";
import { useAuth } from "../../hooks/useAuthHook";

const RegisterPage = () => {
    let {navigate , register , handleSubmit , errors , registerFrom} = useAuth()
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Register
        </h1>

        <form 
        onSubmit={handleSubmit(registerFrom)}
        className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>

            <input
            {...register("name",{
              required: "name is required"
            })}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>

            <input
              {...register("username",{
              required: "username is required"
            })}
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.username && <p className="text-red-500">{errors.username.message}</p>}

          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Image
            </label>

            <input
            {...register("image",{
              required: "image is required"
            })}
              type="text"
              placeholder="Enter image URL"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.image && <p className="text-red-500">{errors.image.message}</p>}

          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
            {...register("password",{
              required: "password is required"
            })}
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate('/')}
            className="text-blue-600 font-medium cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
