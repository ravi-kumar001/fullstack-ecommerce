import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Register = () => {
  const context = useContext(MyContext);
  useEffect(() => {
    context.setWhereHeaderFooter(false);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    password: "",
    confirmPassword: "",
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
    if (formData.password != formData.confirmPassword) {
      console.log("Password and confirmPassword must be same");
      return;
    }
    await axios
      .post("http://localhost:4000/api/user/register", formData)
      .then((res) => {
        const data = res.data;
        if (res.status == 200) {
          console.log(data.message);
        } else if (data.status == 400) {
          console.log(data.message);
        }
      })
      .catch((error) => console.error("Somthing went wrong"));
    // console.log("Form submitted:", formData);
  };

  return (
    <div className="register-container">
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
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Register</h2>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
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
          <label>Mobile No.</label>
          <input
            type="number"
            name="mobileNo"
            value={formData.mobileNo}
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
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
        <NavLink to={"/login"}>
          <button type="submit" className="register-button mt-2">
            Login Here
          </button>
        </NavLink>
      </form>
    </div>
  );
};

export default Register;
