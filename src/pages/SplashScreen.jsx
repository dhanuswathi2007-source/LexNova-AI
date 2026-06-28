import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/auth");
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen bg-slate-900 flex flex-col items-center justify-center">

      {/* Logo */}

      <img
        src={logo}
        alt="LexNova AI"
        className="w-44 h-44 object-contain animate-bounce"
      />

      {/* Title */}

      <h1 className="text-5xl font-bold text-white mt-6">
        LexNova AI
      </h1>

      {/* Welcome Text */}

      <p className="text-yellow-400 text-2xl mt-4 animate-pulse">
        Welcome to LexNova AI
      </p>

      {/* Loading Line */}

      <div className="w-64 h-2 bg-slate-700 rounded-full mt-8 overflow-hidden">
        <div className="h-full bg-yellow-400 animate-pulse"></div>
      </div>

    </div>
  );
}