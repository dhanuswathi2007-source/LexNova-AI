import { useState } from "react";
import axios from "axios";

export default function AIAssistant() {

  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = async () => {

  if (!question) {
    alert("Please enter a question");
    return;
  }

  try {

    const res = await axios.post(
      "http://localhost:5000/api/auth/ai-chat",
      {
        question,
      }
    );

    setResponse(res.data.answer);

  } catch (error) {

    setResponse("Error connecting to AI");

  }
};
  return (
    <div className="min-h-screen bg-blue-50 p-10">

      <h1 className="text-5xl font-bold text-slate-900 mb-8">
        AI Legal Assistant
      </h1>

      <textarea
        placeholder="Ask your legal question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full border p-4 rounded-lg h-40 mb-6"
      />

      <button
        onClick={handleAsk}
        className="bg-blue-600 text-white px-8 py-3 rounded-lg"
      >
        Ask AI
      </button>

      {response && (
        <div className="bg-white p-6 rounded-xl shadow-lg mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Response
          </h2>

          <p>{response}</p>
        </div>
      )}

    </div>
  );
}