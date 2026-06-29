import { useState } from "react";
import { addReport } from "../services/firestoreService";

function ReportIssue() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Road Damage");
  const [priority, setPriority] = useState("Low");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(
        `${position.coords.latitude}, ${position.coords.longitude}`
      );
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addReport({
      title,
      category,
      priority,
      location,
      description,
      email,
      phone,
    });

    alert("Report Submitted Successfully!");

    setTitle("");
    setCategory("Road Damage");
    setPriority("Low");
    setLocation("");
    setDescription("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="max-w-5xl mx-auto py-16 px-8">

      <h1 className="text-5xl font-bold mb-10 text-center">
        Report Community Issue
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-10 space-y-6"
      >

        <input
          type="text"
          placeholder="Issue Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-3 rounded-lg"
          required
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-3 rounded-lg"
        >
          <option>Road Damage</option>
          <option>Garbage</option>
          <option>Water Leakage</option>
          <option>Street Light</option>
          <option>Drainage</option>
        </select>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full border p-3 rounded-lg"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <button
          type="button"
          onClick={handleLocation}
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Use Current Location
        </button>

        <textarea
          rows="5"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <button
          className="bg-blue-700 text-white px-10 py-4 rounded-xl w-full"
        >
          Submit Report
        </button>

      </form>

    </div>
  );
}

export default ReportIssue;