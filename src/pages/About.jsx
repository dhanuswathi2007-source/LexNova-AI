import Navbar from "../components/Navbar";
import aboutImage from "../assets/about.png";

export default function About() {
  return (
    <div className="min-h-screen bg-blue-50">

      <Navbar />

      <section className="max-w-7xl mx-auto px-10 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}

          <div>

            <h1 className="text-6xl font-bold text-yellow-500 mb-8">
              About LexNova AI
            </h1>

            <p className="text-blue-900 text-xl leading-10 mb-6">
              LexNova AI is an advanced legal technology platform
              built to simplify legal research, case tracking,
              document drafting, and legal information access
              using Artificial Intelligence.
            </p>

            <p className="text-blue-900 text-xl leading-10 mb-6">
              The platform is designed for advocates, law students,
              legal researchers, corporate professionals, and
              citizens who need quick and reliable legal resources.
            </p>

            <p className="text-blue-900 text-xl leading-10 mb-6">
              Users can search advocates, track case status,
              verify FIR information, access bare acts,
              explore legal citations, generate petition formats,
              and receive AI-powered legal guidance.
            </p>

            <p className="text-blue-900 text-xl leading-10">
              Our mission is to make legal knowledge accessible,
              efficient, and intelligent through one modern
              digital platform.
            </p>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <img
              src={aboutImage}
              alt="About LexNova AI"
              className="w-[500px] rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300"
            />

          </div>

        </div>

      </section>

    </div>
  );
}