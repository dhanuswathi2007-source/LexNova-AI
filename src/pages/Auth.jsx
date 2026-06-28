import { useState } from "react";
import axios from "axios";
import logo from "../assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

export default function Auth() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      if (res.data.success) {
        alert("Login Successful");

        localStorage.setItem("isLoggedIn", "true");

        navigate("/home");
      }
    } catch (error) {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">

        {/* Logo */}

        <div className="flex flex-col items-center">

          <img
            src={logo}
            alt="LexNova AI"
            className="w-24 h-24 mb-4"
          />

          <h1 className="text-3xl font-bold text-slate-800">
            LexNova AI
          </h1>

          <p className="text-gray-500 mt-2">
            Smart Legal Assistant
          </p>

        </div>

        {/* Login Form */}

        <div className="mt-8">

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded-xl mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded-xl mb-4"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-slate-900 text-white p-3 rounded-xl hover:bg-slate-800"
          >
            Login
          </button>

        </div>

        {/* Divider */}

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Google Login */}

        <div className="flex justify-center">

          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);

              localStorage.setItem("isLoggedIn", "true");

              alert("Google Login Successful");

              navigate("/home");
            }}
            onError={() => {
              alert("Google Login Failed");
            }}
          />

        </div>

        {/* Signup */}

        <p className="text-center mt-6 text-gray-600">
          New User?{" "}

          <Link
            to="/advocate-register"
            className="text-blue-600 font-semibold"
          >
            Register Here
          </Link>

        </p>

      </div>

    </div>
  );
}