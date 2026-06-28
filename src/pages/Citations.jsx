import { useState, useEffect } from "react";
import axios from "axios";

export default function Citations() {

  const [citationNumber, setCitationNumber] = useState("");
  const [caseName, setCaseName] = useState("");
  const [courtName, setCourtName] = useState("");
  const [judgeName, setJudgeName] = useState("");
  const [year, setYear] = useState("");
  const [summary, setSummary] = useState("");

  const [citations, setCitations] = useState([]);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const fetchCitations = async () => {
  try {

    const res = await axios.get(
      "http://localhost:5000/api/auth/citations"
    );

    setCitations(res.data);

  } catch (error) {

    console.log(error);

  }
};

useEffect(() => {
  fetchCitations();
}, []);

const handleAddCitation = async () => {

  try {

    if (editId) {

      await axios.put(
        `http://localhost:5000/api/auth/update-citation/${editId}`,
        {
          citationNumber,
          caseName,
          courtName,
          judgeName,
          year,
          summary,
        }
      );

      alert("Citation Updated Successfully");

      setEditId(null);

    } else {

      await axios.post(
        "http://localhost:5000/api/auth/add-citation",
        {
          citationNumber,
          caseName,
          courtName,
          judgeName,
          year,
          summary,
        }
      );

      alert("Citation Added Successfully");

    }

    setCitationNumber("");
    setCaseName("");
    setCourtName("");
    setJudgeName("");
    setYear("");
    setSummary("");

    fetchCitations();

  } catch (error) {

    alert("Operation Failed");

  }

};


const handleDelete = async (id) => {

  try {

    await axios.delete(
      `http://localhost:5000/api/auth/delete-citation/${id}`
    );

    alert("Citation Deleted Successfully");

    fetchCitations();

  } catch (error) {

    alert("Delete Failed");

  }

};
  return (
    <div className="min-h-screen bg-blue-50 p-10">

      <h1 className="text-5xl font-bold mb-8">
        Citations
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow-lg space-y-4">

        <input
          type="text"
          placeholder="Citation Number"
          value={citationNumber}
          onChange={(e)=>setCitationNumber(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Case Name"
          value={caseName}
          onChange={(e)=>setCaseName(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Court Name"
          value={courtName}
          onChange={(e)=>setCourtName(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Judge Name"
          value={judgeName}
          onChange={(e)=>setJudgeName(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e)=>setYear(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          placeholder="Judgment Summary"
          value={summary}
          onChange={(e)=>setSummary(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <button
  onClick={handleAddCitation}
  className="bg-blue-600 text-white px-8 py-3 rounded-lg"
>
  {editId ? "Update Citation" : "Add Citation"}
</button>


      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg mt-8">

  <h2 className="text-3xl font-bold mb-6">
    All Citations
  </h2>

  <input
    type="text"
    placeholder="Search Citation Number..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full border p-3 rounded-lg mb-4"
  />

  <table className="w-full border">

    <thead>
      <tr className="bg-blue-100">
        <th className="border p-3">Citation No</th>
        <th className="border p-3">Case Name</th>
        <th className="border p-3">Court</th>
        <th className="border p-3">Judge</th>
        <th className="border p-3">Year</th>
        <th className="border p-3">Actions</th>
      </tr>
    </thead>

    <tbody>

      {citations
        .filter(item =>
          item.citationNumber
            ?.toLowerCase()
            .includes(search.toLowerCase())
        )
        .map((item) => (

          <tr key={item._id}>

            <td className="border p-3">{item.citationNumber}</td>
            <td className="border p-3">{item.caseName}</td>
            <td className="border p-3">{item.courtName}</td>
            <td className="border p-3">{item.judgeName}</td>
            <td className="border p-3">{item.year}</td>

            <td className="border p-3">

              <button
                onClick={() => {

                  setEditId(item._id);

                  setCitationNumber(item.citationNumber);
                  setCaseName(item.caseName);
                  setCourtName(item.courtName);
                  setJudgeName(item.judgeName);
                  setYear(item.year);
                  setSummary(item.summary);

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