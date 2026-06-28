import { useState, useEffect } from "react";
import axios from "axios";

export default function InterimOrder() {

  const [caseNumber, setCaseNumber] = useState("");
  const [clientName, setClientName] = useState("");
  const [interimOrder, setInterimOrder] = useState("");
  const [decreedStatus, setDecreedStatus] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [remarks, setRemarks] = useState("");
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const fetchOrders = async () => {
  try {

    const res = await axios.get(
      "http://localhost:5000/api/auth/orders"
    );

    setOrders(res.data);

  } catch (error) {

    console.log(error);

  }
};

useEffect(() => {
  fetchOrders();
}, []);

const handleAddOrder = async () => {

  try {

    if (editId) {

      await axios.put(
        `http://localhost:5000/api/auth/update-order/${editId}`,
        {
          caseNumber,
          clientName,
          interimOrder,
          decreedStatus,
          orderDate,
          remarks,
        }
      );

      alert("Order Updated Successfully");

      setEditId(null);

    } else {

      await axios.post(
        "http://localhost:5000/api/auth/add-order",
        {
          caseNumber,
          clientName,
          interimOrder,
          decreedStatus,
          orderDate,
          remarks,
        }
      );

      alert("Order Added Successfully");

    }

    setCaseNumber("");
    setClientName("");
    setInterimOrder("");
    setDecreedStatus("");
    setOrderDate("");
    setRemarks("");

    fetchOrders();

  } catch (error) {

    alert("Operation Failed");

  }

};

const handleDelete = async (id) => {

  try {

    await axios.delete(
      `http://localhost:5000/api/auth/delete-order/${id}`
    );

    alert("Order Deleted Successfully");

    fetchOrders();

  } catch (error) {

    alert("Delete Failed");

  }

};

  return (
    <div className="min-h-screen bg-blue-50 p-10">

      <h1 className="text-5xl font-bold mb-8">
        Interim Order & Decreed
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow-lg space-y-4">

        <input
          type="text"
          placeholder="Case Number"
          value={caseNumber}
          onChange={(e)=>setCaseNumber(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Client Name"
          value={clientName}
          onChange={(e)=>setClientName(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          placeholder="Interim Order"
          value={interimOrder}
          onChange={(e)=>setInterimOrder(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Decreed Status"
          value={decreedStatus}
          onChange={(e)=>setDecreedStatus(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="date"
          value={orderDate}
          onChange={(e)=>setOrderDate(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          placeholder="Remarks"
          value={remarks}
          onChange={(e)=>setRemarks(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <button
          onClick={handleAddOrder}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg"
        >
          {editId ? "Update Order" : "Add Order"}
        </button>

      </div>
<div className="bg-white p-8 rounded-2xl shadow-lg mt-8">

  <h2 className="text-3xl font-bold mb-6">
    All Orders
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
        <th className="border p-3">Interim Order</th>
        <th className="border p-3">Decreed</th>
        <th className="border p-3">Order Date</th>
        <th className="border p-3">Remarks</th>
        <th className="border p-3">Actions</th>
      </tr>
    </thead>

    <tbody>

      {orders
        .filter(item =>
          item.caseNumber
            ?.toLowerCase()
            .includes(search.toLowerCase())
        )
        .map((item) => (

          <tr key={item._id}>

            <td className="border p-3">{item.caseNumber}</td>
            <td className="border p-3">{item.clientName}</td>
            <td className="border p-3">{item.interimOrder}</td>
            <td className="border p-3">{item.decreedStatus}</td>
            <td className="border p-3">{item.orderDate}</td>
            <td className="border p-3">{item.remarks}</td>

            <td className="border p-3">

              <button
  onClick={() => {

    setEditId(item._id);

    setCaseNumber(item.caseNumber);
    setClientName(item.clientName);
    setInterimOrder(item.interimOrder);
    setDecreedStatus(item.decreedStatus);
    setOrderDate(item.orderDate);
    setRemarks(item.remarks);

  }}
  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
>
  Edit
</button>

              <button 
              onClick={() => handleDelete(item._id)}
              className="bg-red-500 text-white px-4 py-2 rounded">
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