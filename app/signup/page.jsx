"use client"; // For client-side interactivity

import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your signup logic here (e.g., send data to API)
  };

  return (
    <>
      <>
        <h2 className="text-center font-black text-4xl text-white ">
          SignUp Page
        </h2>

        <form onSubmit={handleSubmit} className="w-1/2 mx-auto mt-9   ">
          <div className="md:flex justify-between">
            <input
              className="w-full p-2 rounded mb-4 md:mb-0 md:mr-5"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="firstName"
              required
            />

            <input
              className="w-full p-2 rounded"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="lastName"
            />
          </div>
          <div className="flex">
            <input
              type="Email"
              className="w-full mt-5 p-2 rounded"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="flex">
            <input
              type="password"
              className="w-full mt-5 p-2 rounded"
              placeholder=" Password"
              required
            />
          </div>
          <div className="flex">
            <input
              type="password"
              className="w-full mt-5 p-2 rounded"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div class="flex">
            <button className="bg-white p-2 rounded w-2/3 mt-5 text-slate-700 hover:bg-slate-900 hover:text-white mx-auto">
              SignUp
            </button>
          </div>
        </form>
      </>
    </>
  );
}
