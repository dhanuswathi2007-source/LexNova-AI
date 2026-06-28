import { useState, useEffect } from "react";
import axios from "axios";

export default function FIRManagement() {

  const [firNumber, setFirNumber] = useState("");
  const [complainant, setComplainant] = useState("");
  const [accused, setAccused] = useState("");
  const [policeStation, setPoliceStation] = useState("");
  const [firDate, setFirDate] = useState("");
  const [section, setSection] = useState("");
  const [status, setStatus] = useState("");

  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const [firs, setFirs] = useState([]);

  const fetchFIRs = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/auth/firs"
      );

      setFirs(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {
    fetchFIRs();
  }, []);

  const handleDelete = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/auth/delete-fir/${id}`
      );

      alert("FIR Deleted Successfully");

      fetchFIRs();

    } catch (error) {

      alert("Delete Failed");

    }

  };

  const handleAddFIR = async () => {

    try {

      if (editId) {

        await axios.put(
          `http://localhost:5000/api/auth/update-fir/${editId}`,
          {
            firNumber,
            complainant,
            accused,
            policeStation,
            firDate,
            section,
            status,
          }
        );

        alert("FIR Updated Successfully");

        setEditId(null);

      } else {

        await axios.post(
          "http://localhost:5000/api/auth/add-fir",
          {
            firNumber,
            complainant,
            accused,
            policeStation,
            firDate,
            section,
            status,
          }
        );

        alert("FIR Added Successfully");

      }

      setFirNumber("");
      setComplainant("");
      setAccused("");
      setPoliceStation("");
      setFirDate("");
      setSection("");
      setStatus("");

      fetchFIRs();

    } catch (error) {

      alert("Operation Failed");

    }

  };

  return (

    <div className="min-h-screen bg-blue-50 p-10">

      <h1 className="text-5xl font-bold mb-8">
        FIR Management
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow-lg space-y-4">
<input
          type="text"
          placeholder="FIR Number"
          value={firNumber}
          onChange={(e) => setFirNumber(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Complainant Name"
          value={complainant}
          onChange={(e) => setComplainant(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Accused Name"
          value={accused}
          onChange={(e) => setAccused(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Police Station"
          value={policeStation}
          onChange={(e) => setPoliceStation(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="date"
          value={firDate}
          onChange={(e) => setFirDate(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="IPC Section"
          value={section}
          onChange={(e) => setSection(e.target.value)}
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
          onClick={handleAddFIR}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg"
        >
          {editId ? "Update FIR" : "Add FIR"}
        </button>

      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg mt-8">

        <h2 className="text-3xl font-bold mb-6">
          All FIR Records
        </h2>

        <input
          type="text"
          placeholder="Search FIR Number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <table className="w-full border">

          <thead>

            <tr className="bg-blue-100">

              <th className="border p-3">FIR No</th>
              <th className="border p-3">Complainant</th>
              <th className="border p-3">Accused</th>
              <th className="border p-3">Police Station</th>
              <th className="border p-3">Section</th>
              <th className="border p-3">Status</th>
              <th className="border p-3">Actions</th>

            </tr>

          </thead>

          <tbody>

            {firs
              .filter(item =>
                item.firNumber
                  ?.toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((item) => (

                <tr key={item._id}>

                  <td className="border p-3">{item.firNumber}</td>
                  <td className="border p-3">{item.complainant}</td>
                  <td className="border p-3">{item.accused}</td>
                  <td className="border p-3">{item.policeStation}</td>
                  <td className="border p-3">{item.section}</td>
                  <td className="border p-3">{item.status}</td>

                  <td className="border p-3">

                    <button
                      onClick={() => {

                        setEditId(item._id);

                        setFirNumber(item.firNumber);
                        setComplainant(item.complainant);
                        setAccused(item.accused);
                        setPoliceStation(item.policeStation);
                        setFirDate(item.firDate);
                        setSection(item.section);
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
      

