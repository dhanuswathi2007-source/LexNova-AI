import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const modules = [
  { name: "⚖️ Advocate Search", path: "/advocate" },
  { name: "📄 Case Status", path: "/case-status" },
  { name: "🛡️ FIR Status", path: "/fir-status" },
  { name: "📚 Bare Acts", path: "/bare-acts" },
  { name: "🏛️ Citations", path: "/citations" },
  { name: "🔍 Bailable Checker", path: "/bailable-checker" },
  { name: "📝 Petition Formats", path: "/petition-formats" },
  { name: "⚖️ Court Jurisdiction", path: "/court-jurisdiction" },
  { name: "📍 Police Jurisdiction", path: "/police-jurisdiction" },
  { name: "🤖 AI Assistant", path: "/ai-assistant" },
];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6 text-black">
          Legal Assistant Dashboard
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {modules.map((module, index) => (
            <Link
              key={index}
              to={module.path}
              className="bg-slate-800 p-6 rounded-2xl hover:bg-slate-700 hover:scale-105 transition-all duration-300 shadow-lg"
              >
              <h3 className="text-lg font-medium text-white">
                {module.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}