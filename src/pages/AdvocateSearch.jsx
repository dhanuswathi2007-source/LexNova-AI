import { useEffect, useState } from "react";
import axios from "axios";

export default function AdvocateSearch() {

  const [advocates, setAdvocates] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchAdvocates();
  }, []);

  const fetchAdvocates = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/auth/advocates"
      );

      setAdvocates(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-10">

      <h1 className="text-5xl font-bold mb-8 text-slate-900">
        Advocate Search
      </h1>

      <input
        type="text"
        placeholder="Search by Name or Enrollment Number"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border p-4 rounded-lg mb-8"
      />

      <div className="grid md:grid-cols-2 gap-6">

        {advocates
          .filter(
            (advocate) =>
              advocate.fullName
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||
              advocate.enrollmentNumber
                ?.toLowerCase()
                .includes(search.toLowerCase())
          )
          .map((advocate) => (
            <div
              key={advocate._id}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >

              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                {advocate.fullName}
              </h2>

              <p className="mb-2">
                <strong>Enrollment No:</strong>{" "}
                {advocate.enrollmentNumber}
              </p>

              <p className="mb-2">
                <strong>Email:</strong>{" "}
                {advocate.email}
              </p>

              <p className="mb-2">
                <strong>Mobile:</strong>{" "}
                {advocate.mobile}
              </p>

              <p className="mb-2">
                <strong>District:</strong>{" "}
                {advocate.district}
              </p>

            </div>
          ))}

      </div>

    </div>
  );
}