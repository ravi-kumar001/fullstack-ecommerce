import React, { useCallback, useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const context = useContext(MyContext);
  useEffect(() => {
    context.setWhereHeaderFooter(false);
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:4000/api/user/login", formData)
      .then((res) => {
        const data = res.data;
        console.log(data);
        console.log(res.status);
        if (res.status == 200) {
          console.log(data.message);
          navigate("/");
        } else if (data.status == 400) {
          console.log(data.message);
        } else if (data.status == 401) {
          console.log(data.message);
        } else if (data.status == 402) {
          console.log(data.message);
        } else if (data.status == 403) {
          console.log(data.message);
        }
      })
      .catch((error) => console.error("Somthing went wrong"));
  };

  return (
    <div className="login-container">
      <div class="shape-bottom">
        <svg
          fill="#fff"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 1921 819.8"
          style={{ enableBackground: "new 0 0 1921 819.8" }}
          xml:space="preserve"
        >
          <path
            class="st0"
            d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"
          ></path>
        </svg>
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
