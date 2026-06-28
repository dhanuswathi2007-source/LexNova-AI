import { useState, useEffect } from "react";
import axios from "axios";

export default function CaseStatus() {

  const [caseNumber, setCaseNumber] = useState("");
  const [result, setResult] = useState(null);
  const [cases, setCases] = useState([]);

  const fetchCases = async () => {
    try {

      const res = await axios.get(
        "http://localhost:5000/api/auth/cases"
      );

      setCases(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {
    fetchCases();
  }, []);

  const handleSearch = () => {

    if (!caseNumber) {
      alert("Please enter a Case Number");
      return;
    }

    const found = cases.find(
      (item) => item.caseNumber === caseNumber
    );

    if (!found) {

      alert("Case Not Found");

      setResult(null);

      return;

    }

    setResult(found);

  };

  return (

    <div className="min-h-screen bg-blue-50 p-10">

      <h1 className="text-5xl font-bold text-slate-900 mb-8">
        Case Status
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow-lg">

        <input
          type="text"
          placeholder="Enter Case Number"
          value={caseNumber}
          onChange={(e) => setCaseNumber(e.target.value)}
          className="w-full border p-4 rounded-lg mb-4"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
        >
          Search Case
        </button>

      </div>

      {result && (

        <div className="bg-white p-8 rounded-2xl shadow-lg mt-8">

          <h2 className="text-3xl font-bold mb-6">
            Case Details
          </h2>

          <div className="space-y-3 text-lg">

            <p>
              <strong>Case Number:</strong> {result.caseNumber}
            </p>

            <p>
              <strong>Client Name:</strong> {result.clientName}
            </p>

            <p>
              <strong>Court:</strong> {result.courtName}
            </p>

            <p>
              <strong>Case Type:</strong> {result.caseType}
            </p>

            <p>
              <strong>Hearing Date:</strong> {result.hearingDate}
            </p>

            <p>
              <strong>Status:</strong> {result.status}
            </p>

          </div>

        </div>

      )}
      <div className="bg-white p-8 rounded-2xl shadow-lg mt-8">

        <h2 className="text-3xl font-bold mb-6">
          Recent Cases
        </h2>

        <table className="w-full border">

          <thead>

            <tr className="bg-blue-100">

              <th className="border p-3">Case No</th>
              <th className="border p-3">Client</th>
              <th className="border p-3">Court</th>
              <th className="border p-3">Status</th>
              <th className="border p-3">Action</th>

            </tr>

          </thead>

          <tbody>

            {cases.map((item) => (

              <tr key={item._id}>

                <td className="border p-3">
                  {item.caseNumber}
                </td>

                <td className="border p-3">
                  {item.clientName}
                </td>

                <td className="border p-3">
                  {item.courtName}
                </td>

                <td className="border p-3">
                  {item.status}
                </td>

                <td className="border p-3">

                  <button
                    onClick={() => setResult(item)}
                    className="bg-green-600 text-white px-4 py-2 rounded"
                  >
                    View
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}