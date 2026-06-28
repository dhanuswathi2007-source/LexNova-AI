import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import homeImage from "../assets/home.png";
import aboutImage from "../assets/about.png";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Home() {

  const { t: text } = useContext(LanguageContext);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <div className="min-h-screen bg-white
     text-blue">

      <Navbar/>
      <section id="home">
      <div className="max-w-7xl mx-auto px-12 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}

          <div>

            <h1 className="text-7xl font-bold mb-4 text-slate-900">
              LexNova AI
            </h1>

            <h2 className="text-4xl font-semibold text-yellow-500 mb-6">
              {text.heroTitle}
            </h2>

            <p className="text-2xl mb-4">
              Case Status | FIR Status | Bare Acts | Citations | Petition Formats
            </p>

            <p className="text-blue-600 text-xl mb-8 leading-10">
              Access legal resources, track cases, verify legal provisions,
              find court jurisdiction, generate petition formats, and get
              AI-powered legal assistance in one platform.
            </p>

            <div className="flex gap-4">

              <button
  onClick={() => {
    document
      .getElementById("dashboard")
      .scrollIntoView({ behavior: "smooth" });
  }}
  className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition-all duration-300"
>
  Explore Now
</button>

<button
  onClick={() => navigate("/ai-assistant")}
  className="border border-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300"
>
  AI Assistant
</button>
            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <img
              src={homeImage}
              alt="LexNova AI"
              className="w-96 hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>
      </section>
{/* ABOUT SECTION */}

<section  id="about" className="bg-blue-50 py-20 px-10">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    <div>

      <h2 className="text-6xl font-bold text-yellow-500 mb-8">
        {text.aboutTitle}
      </h2>

      <p className="text-slate-700 text-2xl leading-10 mb-6">
        LexNova AI is an advanced legal technology platform
        designed to simplify legal research, case tracking,
        document drafting, and legal information access
        through Artificial Intelligence.
      </p>

      <p className="text-slate-700 text-2xl leading-10 mb-6">
        Our platform empowers advocates, law students,
        legal researchers, and citizens with intelligent
        legal tools and resources.
      </p>

      <p className="text-slate-700 text-2xl leading-10">
        From case tracking to AI-powered legal assistance,
        LexNova AI brings everything together in one place.
      </p>

    </div>

    <div className="flex justify-center">

      <img
        src={aboutImage}
        alt="About LexNova AI"
        className="w-[550px] rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300"
      />

    </div>

  </div>

</section>
{/* HOW IT WORKS SECTION */}

<section id= "how-it-works" className="bg-white py-20 px-10">

  <div className="max-w-7xl mx-auto">

    <h2 className="text-6xl font-bold text-center text-slate-900 mb-4">
      How It Works
    </h2>

    <p className="text-center text-gray-600 text-xl mb-16">
      Access legal services in just a few simple steps.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl hover:scale-105 transition-all duration-300">
        <h3 className="text-3xl font-bold text-yellow-400 mb-4">01</h3>
        <h4 className="text-xl font-semibold mb-3">Search Advocate</h4>
        <p>Find advocate information quickly and efficiently.</p>
      </div>

      <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl hover:scale-105 transition-all duration-300">
        <h3 className="text-3xl font-bold text-yellow-400 mb-4">02</h3>
        <h4 className="text-xl font-semibold mb-3">Case Status</h4>
        <p>Track ongoing and completed court cases instantly.</p>
      </div>

      <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl hover:scale-105 transition-all duration-300">
        <h3 className="text-3xl font-bold text-yellow-400 mb-4">03</h3>
        <h4 className="text-xl font-semibold mb-3">FIR Verification</h4>
        <p>Check and verify FIR details with ease.</p>
      </div>

      <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl hover:scale-105 transition-all duration-300">
        <h3 className="text-3xl font-bold text-yellow-400 mb-4">04</h3>
        <h4 className="text-xl font-semibold mb-3">Bare Acts</h4>
        <p>Access legal acts, provisions and regulations.</p>
      </div>

      <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl hover:scale-105 transition-all duration-300">
        <h3 className="text-3xl font-bold text-yellow-400 mb-4">05</h3>
        <h4 className="text-xl font-semibold mb-3">Petition Formats</h4>
        <p>Generate legal petitions and documents quickly.</p>
      </div>

      <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl hover:scale-105 transition-all duration-300">
        <h3 className="text-3xl font-bold text-yellow-400 mb-4">06</h3>
        <h4 className="text-xl font-semibold mb-3">AI Assistant</h4>
        <p>Get intelligent legal guidance powered by AI.</p>
      </div>

    </div>

  </div>

</section>
{/* DASHBOARD SECTION */}

<section id="dashboard" className="bg-blue-50 py-20 px-10">

  <div className="max-w-7xl mx-auto">

    <h2 className="text-6xl font-bold text-yellow-500 text-center mb-4">
      {text.dashboardTitle}
    </h2>

    <p className="text-center text-slate-700 text-xl mb-16">
      Explore all legal tools available in LexNova AI.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <Link to="/advocate" className="bg-white p-8 rounded-3xl shadow-xl hover:scale-105 transition-all duration-300 block">
        <h3 className="text-2xl font-bold text-slate-900">⚖️ Advocate Search</h3>
      </Link>

      <Link to="/case-status" className="bg-white p-8 rounded-3xl shadow-xl hover:scale-105 transition-all duration-300 block">
        <h3 className="text-2xl font-bold text-slate-900">📄 Case Status</h3>
      </Link>

      <Link to="/fir-status" className="bg-white p-8 rounded-3xl shadow-xl hover:scale-105 transition-all duration-300 block">
        <h3 className="text-2xl font-bold text-slate-900">🛡️ FIR Status</h3>
      </Link>

      <Link to="/bare-acts" className="bg-white p-8 rounded-3xl shadow-xl hover:scale-105 transition-all duration-300 block">
        <h3 className="text-2xl font-bold text-slate-900">📚 Bare Acts</h3>
      </Link>

      <Link to="/citations" className="bg-white p-8 rounded-3xl shadow-xl hover:scale-105 transition-all duration-300 block">
        <h3 className="text-2xl font-bold text-slate-900">🏛️ Citations</h3>
      </Link>

      <Link to="/ai-assistant" className="bg-white p-8 rounded-3xl shadow-xl hover:scale-105 transition-all duration-300 block">
        <h3 className="text-2xl font-bold text-slate-900">🤖 AI Assistant</h3>
      </Link>

<Link
  to="/case-management"
  className="bg-white p-8 rounded-3xl shadow-xl hover:scale-105 transition-all duration-300 block"
>
  <h3 className="text-2xl font-bold text-slate-900">
    📂 Case Management
  </h3>
</Link>
      

      <Link to="/interim-order-and-decreed" className="bg-white p-8 rounded-3xl shadow-xl hover:scale-105 transition-all duration-300 block">
        <h3 className="text-2xl font-bold text-slate-900">📜 Interim Order & Decreed</h3>
      </Link>


      


      

      <Link to="/petition-formats" className="bg-white p-8 rounded-3xl shadow-xl hover:scale-105 transition-all duration-300 block">
        <h3 className="text-2xl font-bold text-slate-900">📂 Petition Formats</h3>
      </Link>

      
    </div>

  </div>

</section>
{/* FOOTER */}

<footer className="bg-slate-900 text-white py-16 px-10">

  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

    <div>
      <h2 className="text-3xl font-bold text-yellow-400 mb-4">
        LexNova AI
      </h2>

      <p className="text-gray-300">
        Smart Legal Assistant for Advocates,
        Law Students, Researchers and Citizens.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-4">
        {text.quickLinks}
      </h3>

      
    

    <ul className="space-y-2 text-gray-300">

  <li>
    <a
      href="#home"
      className="hover:text-yellow-400 transition duration-300"
    >
      Home
    </a>
  </li>

  <li>
    <a
      href="#about"
      className="hover:text-yellow-400 transition duration-300"
    >
      About
    </a>
  </li>

  <li>
    <a
      href="#how-it-works"
      className="hover:text-yellow-400 transition duration-300"
    >
      How It Works
    </a>
  </li>

  <li>
    <a
      href="#dashboard"
      className="hover:text-yellow-400 transition duration-300"
    >
      Dashboard
    </a>
  </li>

</ul>

</div>

    <div>
      <h3 className="text-xl font-semibold mb-4">
        {text.features}
      </h3>
<ul className="space-y-2 text-gray-300">

  <li>⚖️ Advocate Search</li>

  <li>📂 Case Management</li>

  <li>📜 Interim Orders & Decreed</li>

  <li>📚 Bare Acts</li>

  <li>🛡️ FIR Status</li>

  <li>📑 Petition Formats</li>

  

  

  <li>📖 Citations</li>

  <li>🤖 AI Legal Assistant</li>

  <li>🌐 English / Tamil Support</li>

</ul>
     
    </div>

  </div>

  <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
    © 2026 LexNova AI. All Rights Reserved.
  </div>

</footer>
    </div>
  );
}