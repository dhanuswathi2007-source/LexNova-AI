import { useState } from "react";
import axios from "axios";

export default function AdvocateRegister() {

  const [formData, setFormData] = useState({
    fullName: "",
    enrollmentNumber: "",
    email: "",
    mobile: "",
    district: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async () => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/register",
      formData
    );

    console.log(res.data);
    alert("Registration Successful");
  } catch (error) {
    console.log(error);
    alert("Registration Failed");
  }
};

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl">

        <h1 className="text-4xl font-bold text-center text-slate-900 mb-8">
          Advocate Registration
        </h1>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({
                ...formData,
                fullName: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Enrollment Number"
            value={formData.enrollmentNumber}
            onChange={(e) =>
              setFormData({
                ...formData,
                enrollmentNumber: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={(e) =>
              setFormData({
                ...formData,
                mobile: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="District"
            value={formData.district}
            onChange={(e) =>
              setFormData({
                ...formData,
                district: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({
                ...formData,
                confirmPassword: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Register
          </button>

        </div>

      </div>

    </div>
  );
}