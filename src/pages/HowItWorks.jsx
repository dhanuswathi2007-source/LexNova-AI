export default function HowItWorks() {
  const steps = [
    {
      title: "Advocate Search",
      description:
        "Search advocate details using name and enrollment number.",
    },
    {
      title: "Case Tracking",
      description:
        "Track case status, hearing dates, court details, and district information.",
    },
    {
      title: "FIR Monitoring",
      description:
        "Check FIR status and access police station information.",
    },
    {
      title: "Legal Research",
      description:
        "Explore Bare Acts, Citations, and legal references quickly.",
    },
    {
      title: "Jurisdiction Finder",
      description:
        "Find Court and Police Station jurisdiction details instantly.",
    },
    {
      title: "Petition Generator",
      description:
        "Access model forms and petition formats for legal drafting.",
    },
    {
      title: "AI Legal Assistant",
      description:
        "Get AI-powered guidance for legal provisions and case-related queries.",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-center text-slate-800 mb-4">
        How It Works
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Follow these simple steps to use LexNova AI effectively.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <h2 className="text-xl font-semibold text-slate-800">
                {step.title}
              </h2>
            </div>

            <p className="text-gray-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}