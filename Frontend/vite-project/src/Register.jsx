import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // <-- Import Link here
import axios from "axios";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      // Sending the data to the backend using axios
      const response = await axios.post(
        "http://localhost:5000/users/register",
        form
      );
      console.log(response.data); // Log success message
      setForm({ name: "", email: "", password: "" }); // Reset form after success
      navigate("/home"); //renders to /home after clicking the register button
    } catch (error) {
      // If the error has a response object (e.g., a 400/500 error from backend)
      console.error("Error response data:", error.response.data);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={form.name}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={form.email}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="text"
            name="password"
            onChange={handleChange}
            value={form.password}
          />
        </div>

        <button type="submit">Register</button>
      </form>
      <div>
        <p>Already have an account?</p>
        {/* Link to the login page */}
        <Link to="/login">Login here</Link>
      </div>
    </>
  );
}

export default Register;
