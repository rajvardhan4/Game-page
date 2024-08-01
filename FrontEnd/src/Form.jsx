import React, { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Form() {
  const [showAdd, setShowAdd] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [items, setItems] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleOnchange = (e) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4001/create-user", items);
      console.log(response);

      setItems({
        username: "",
        email: "",
        phone: "",
        password: "",
      });

      setShowAdd(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  const toggleForm = () => {
    setShowAdd(!showAdd);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseEnter = () => {
    const form = document.getElementById("form-container");
    const button = document.getElementById("emcee");
    const formRect = form.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maxX = formRect.width - buttonRect.width;
    const randX = Math.floor(Math.random() * maxX);

    button.style.left = `${randX}px`;
  };

  const handleClick = () => {
    alert("clicked!");
  };

  return (
    <div className="bg-custom-background w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <style>
        {`
          input::placeholder {
            color: white;
            opacity: 0.7; /* You can adjust the opacity if needed */
          }
        `}
      </style>
      <form
        id="form-container"
        className="relative shadow-gray-900  p-6 rounded-lg shadow-xl max-w-md w-full backdrop-blur-[2px]"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-5 text-center">USER FORM</h2>
        <div className="mb-4">
          <label className="block text-left mt-3 font-medium">Username</label>
          <input
            type="text"
            id="name"
            name="username"
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-100 bg-transparent focus:border-transparent"
            placeholder="Enter your username"
            onChange={handleOnchange}
            value={items.username}
          />
        </div>
        <div className="mb-4">
          <label className="block text-left mt-3 font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-100 bg-transparent focus:border-transparent"
            placeholder="Enter your email"
            onChange={handleOnchange}
            value={items.email}
          />
        </div>
        <div className="mb-4">
          <label className="block text-left mt-3 font-medium">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-100 bg-transparent focus:border-transparent"
            placeholder="Enter your phone number"
            onChange={handleOnchange}
            value={items.phone}
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-left mt-3 font-medium">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-100 bg-transparent focus:border-transparent pr-10"
            placeholder="Enter your password"
            onChange={handleOnchange}
            value={items.password}
          />
          <span
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer mt-6 "
            onClick={togglePasswordVisibility}
          >
            {/* {showPassword ? <FaEye /> : <FaEyeSlash />} */}
            {showPassword ? "🐵" : "🙈"}
          </span>
        </div>
        <div className="relative w-full h-24">
          <button
            type="submit"
            id="emcee"
            onMouseEnter={handleMouseEnter}
            onClick={handleClick}
            className="absolute p-2 bg-[#100e1395] text-white font-semibold rounded-md transition-all duration-300"
            style={{ left: "50px", top: "50px" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
