import { useState } from "react";
import axios from "axios";

export default function BareActs() {

  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = async () => {

    if (!query) {
      alert("Enter Act or Section");
      return;
    }

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/ai-chat",
        {
          question: `Explain this Indian law provision in detail: ${query}`
        }
      );

      setResult(res.data.answer);

    } catch (error) {

      setResult("Error fetching legal provision");

    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-10">

      <h1 className="text-5xl font-bold mb-8">
        Bare Acts Search
      </h1>

      <input
        type="text"
        placeholder="IPC 420 / BNS 318 / Article 21"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border p-4 rounded-lg mb-4"
      />

      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-8 py-3 rounded-lg"
      >
        Search
      </button>

      {result && (
        <div className="bg-white p-6 rounded-xl shadow-lg mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Legal Provision
          </h2>

          <p className="whitespace-pre-wrap">
            {result}
          </p>
        </div>
      )}

    </div>
  );
}