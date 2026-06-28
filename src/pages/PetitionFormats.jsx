import { useState } from "react";
import axios from "axios";

export default function PetitionFormats() {

  const [petitionType, setPetitionType] = useState("");
  const [result, setResult] = useState("");

  const handleGenerate = async () => {

    if (!petitionType) {
      alert("Enter Petition Type");
      return;
    }

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/ai-chat",
        {
          question: `Generate a professional Indian legal ${petitionType} format`
        }
      );

      setResult(res.data.answer);

    } catch (error) {

      setResult("Error generating petition");

    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-10">

      <h1 className="text-5xl font-bold mb-8">
        Petition Formats
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow-lg">

        <input
          type="text"
          placeholder="Bail Petition / Divorce Petition / Legal Notice"
          value={petitionType}
          onChange={(e) => setPetitionType(e.target.value)}
          className="w-full border p-4 rounded-lg mb-4"
        />

        <button
          onClick={handleGenerate}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg"
        >
          Generate Petition
        </button>

      </div>

      {result && (
        <div className="bg-white p-8 rounded-2xl shadow-lg mt-8">

          <h2 className="text-3xl font-bold mb-6">
            Petition Format
          </h2>

          <pre className="whitespace-pre-wrap text-sm">
            {result}
          </pre>

        </div>
      )}
       
      <div className="mt-10">

  <h2 className="text-3xl font-bold mb-4">
    Sample Petition Formats
  </h2>

  <div className="space-y-3">

    <a
      href="/petitions/Bail_Petition.pdf"
      target="_blank"
      className="block bg-white p-4 rounded-lg shadow"
    >
      📄 Bail Petition
    </a>

    <a
      href="/petitions/Divorce_Petition.pdf"
      target="_blank"
      className="block bg-white p-4 rounded-lg shadow"
    >
      📄 Divorce Petition
    </a>

    <a
      href="/petitions/Legal_Notice.pdf"
      target="_blank"
      className="block bg-white p-4 rounded-lg shadow"
    >
      📄 Legal Notice
    </a>

    <a
      href="/petitions/Affidavit.pdf"
      target="_blank"
      className="block bg-white p-4 rounded-lg shadow"
    >
      📄 Affidavit
    </a>

    <a
      href="/petitions/Anticipatory_Bail.pdf"
      target="_blank"
      className="block bg-white p-4 rounded-lg shadow"
    >
      📄 Anticipatory Bail Petition
    </a>

  </div>

</div> 
    </div>
  );
}