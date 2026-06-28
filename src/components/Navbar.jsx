import logo from "../assets/logo.png";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Navbar() {

  const { language, setLanguage, t: text } = useContext(LanguageContext);

  return (
    <nav className="bg-[#0F172A] text-white px-8 py-4 shadow-lg sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt="LexNova AI"
            className="w-12 h-12"
          />

          <h1 className="text-3xl font-bold text-yellow-400">
            LexNova AI
          </h1>

        </div>

        {/* Menu */}
        <ul className="flex items-center gap-6 text-lg font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-yellow-400 transition-all duration-300"
            >
              {text.home}
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-yellow-400 transition-all duration-300"
            >
              {text.about}
            </a>
          </li>

          <li>
            <a
              href="#how-it-works"
              className="hover:text-yellow-400 transition-all duration-300"
            >
              {text.howItWorks}
            </a>
          </li>

          <li>
            <a
              href="#dashboard"
              className="hover:text-yellow-400 transition-all duration-300"
            >
              {text.dashboard}
            </a>
          </li>

          {/* Language Switch */}
          <li>
            <button
              onClick={() =>
                setLanguage(language === "en" ? "ta" : "en")
              }
              className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              {language === "en" ? "தமிழ்" : "English"}
            </button>
          </li>

          {/* Logout */}
          <li>
            <button
              onClick={() => {
                if (window.confirm("Are you sure you want to logout?")) {
                  window.location.href = "/";
                }
              }}
              className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300"
            >
              Logout
            </button>
          </li>

        </ul>

      </div>

    </nav>
  );
}