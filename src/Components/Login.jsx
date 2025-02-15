import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const login = () => {
    const formData = new FormData();
    formData.append("phone_number", phone);
    formData.append("password", password);

    axios({
      url: "https://realauto.limsa.uz/api/auth/signin",
      method: "POST",
      data: formData,
    })
      .then((res) => {
        localStorage.setItem(
          "accesToken",
          res?.data?.data?.tokens?.accessToken?.token
        )
        navigate("/Home")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex justify-center pt-35 w-full h-[100vh] bg-gray-200">
        <div className="w-full max-w-xs ">
          <form className="bg-white hover:shadow-xl shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Login
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                required
                placeholder="Login"
                autoComplete="current-password"
                onChange={(e) => setPhone(e?.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Parol
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                required
                placeholder="*******"
                autoComplete="current-password"
                onChange={(e) => setPassword(e?.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={login}
              >
                Kirish
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
