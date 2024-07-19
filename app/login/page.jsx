"use client"; // For client-side interactivity

import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., send data to API)
  };

  return (
    <>
      <h2 className="text-center font-black text-2xl md:text-4xl text-white ">
        Login Page
      </h2>

      <form onSubmit={handleSubmit} className="w-1/2 mx-auto mt-9 block">
        <div className="flex ">
          <input
            type="Email"
            className="flex-1 mt-5 p-2 rounded placeholder:text-center w-full"
            placeholder="E-mail"
            required
          />
        </div>
        <div className="flex">
          <input
            type="password"
            className="flex-1 mt-5 p-2 rounded placeholder:text-center w-full"
            placeholder=" Password"
            required
          />
        </div>
        <div className="w-full flex">
          <button
            className="p-2 text-slate-500 w-2/3 mt-9 rounded bg-white mx-auto"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
}
