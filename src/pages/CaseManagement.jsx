import { useState, useEffect } from "react";
import axios from "axios";

export default function CaseManagement() {

  const [caseNumber, setCaseNumber] = useState("");
  const [clientName, setClientName] = useState("");
  const [courtName, setCourtName] = useState("");
  const [caseType, setCaseType] = useState("");
  const [hearingDate, setHearingDate] = useState("");
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

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

  const handleDelete = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/auth/delete-case/${id}`
      );

      alert("Case Deleted Successfully");

      fetchCases();

    } catch (error) {

      alert("Delete Failed");

    }

  };

  const handleAddCase = async () => {

  try {

    if (editId) {

      await axios.put(
        `http://localhost:5000/api/auth/update-case/${editId}`,
        {
          caseNumber,
          clientName,
          courtName,
          caseType,
          hearingDate,
          status,
        }
      );

      alert("Case Updated Successfully");

      setEditId(null);

    } else {

      await axios.post(
        "http://localhost:5000/api/auth/add-case",
        {
          caseNumber,
          clientName,
          courtName,
          caseType,
          hearingDate,
          status,
        }
      );

      alert("Case Added Successfully");
    }

    setCaseNumber("");
    setClientName("");
    setCourtName("");
    setCaseType("");
    setHearingDate("");
    setStatus("");

    fetchCases();

  } catch (error) {

    alert("Error");

  }
};

  return (
    <div className="min-h-screen bg-blue-50 p-10">

      <h1 className="text-5xl font-bold mb-8">
        Case Management
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow-lg space-y-4">

        <input
          type="text"
          placeholder="Case Number"
          value={caseNumber}
          onChange={(e) => setCaseNumber(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Client Name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Court Name"
          value={courtName}
          onChange={(e) => setCourtName(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Case Type"
          value={caseType}
          onChange={(e) => setCaseType(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="date"
          value={hearingDate}
          onChange={(e) => setHearingDate(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <button
          onClick={handleAddCase}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg"
        >
          {editId ? "Update Case": "Add Case"}
        </button>

      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg mt-8">

        <h2 className="text-3xl font-bold mb-6">
          All Cases
        </h2>

        <input
  type="text"
  placeholder="Search Case Number..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full border p-3 rounded-lg mb-4"
/>

        <table className="w-full border">

          <thead>

            <tr className="bg-blue-100">

              <th className="border p-3">Case No</th>
<th className="border p-3">Client</th>
<th className="border p-3">Court</th>
<th className="border p-3">Case Type</th>
<th className="border p-3">Hearing Date</th>
<th className="border p-3">Status</th>
<th className="border p-3">Actions</th>
            </tr>

          </thead>

          <tbody>

            {cases
  .filter(item => item.caseNumber)
  .filter(item =>
    item.caseNumber
      .toLowerCase()
      .includes(search.toLowerCase())
  )
  .map((item) => (

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
                    {item.caseType}
                  </td>

                  <td className="border p-3">
                    {item.hearingDate}
                  </td>


                  <td className="border p-3">
                    {item.status}
                  </td>

                  <td className="border p-3">

                    <button
  onClick={() => {
    setEditId(item._id);

    setCaseNumber(item.caseNumber);
    setClientName(item.clientName);
    setCourtName(item.courtName);
    setCaseType(item.caseType);
    setHearingDate(item.hearingDate);
    setStatus(item.status);
  }}
  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
>
  Edit
</button>

                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Delete
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