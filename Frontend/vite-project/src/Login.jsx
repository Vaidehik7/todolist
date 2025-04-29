import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Logging in with:", form);

    try {
      const response = await axios.post("http://localhost:5000/users/login", form);
      console.log(response.data); // Success message
    //   alert("✅ Login successful!");
      
      // Navigate to dashboard or home page after login
      navigate("/home");  
    } catch (error) {
      console.error("Login error:", error?.response?.data);
      setError(error?.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input 
            type="email" 
            name="email" 
            onChange={handleChange} 
            value={form.email} 
            required
          />
        </div>

        <div>
          <label>Password: </label>
          <input 
            type="password" 
            name="password" 
            onChange={handleChange} 
            value={form.password} 
            required
          />
        </div>

        <button type="submit">Login</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </>
  );
}

export default Login;
