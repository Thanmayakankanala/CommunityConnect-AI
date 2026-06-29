import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {
      localStorage.setItem("admin", "true");
      window.location.href = "/admin";
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="max-w-md mx-auto py-20">

      <form
        onSubmit={handleLogin}
        className="bg-white rounded-2xl shadow-lg p-10"
      >

        <h2 className="text-4xl font-bold text-center mb-10">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg w-full mb-6"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg w-full mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-blue-700 text-white w-full py-3 rounded-lg"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;