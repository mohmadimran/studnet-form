import { useState } from "react";

const App = () => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    college: "",
    email: "",
    password: "",
    address: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // clear error while typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Name required
    if (!form.name.trim()) {
      setError("Name is required");
      return;
    }

    // Validation: Email format
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(form.email)) {
      setError("Enter a valid email address");
      return;
    }

    // Validation: Password length
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px" }}>
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
        />

        <label>Username</label>
        <input
          name="username"
          type="text"
          value={form.username}
          onChange={handleChange}
        />

        <label>College</label>
        <input
          name="college"
          type="text"
          value={form.college}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          name="email"
          type="text"
          value={form.email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />

        <label>Address</label>
        <input
          name="address"
          type="text"
          value={form.address}
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>

      {/* Error message */}
      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
      )}
    </div>
  );
};

export default App;
