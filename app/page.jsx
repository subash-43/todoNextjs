"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import list from "../public/layout-list-thumb-svgrepo-com.svg";

const HomePage = () => {
  const [textAreaValue, setTextAreaValue] = useState();
  const textAreaRef = useRef("null");

  useEffect(() => {
    const resizeTextArea = () => {
      const textArea = textAreaRef.current;
      textArea.style.height = "auto"; // Reset height to auto
      textArea.style.width = "auto";

      // Calculate the required height based on content

      const textScrollHeight = textArea.scrollHeight;

      // const textScrollTop = textArea.scrollTop;
      //  const newHeight = textScrollHeight - textScrollTop;
      // Set the height with a small margin

      textArea.style.height = textScrollHeight + "px";
    };

    // Event listener for input changes in the textarea

    const handleInput = () => {
      resizeTextArea();
    };

    // Attach event listener when the component mounts

    if (textAreaRef.current) {
      textAreaRef.current.addEventListener("input", handleInput);
    }
  }, []);
  return (
    <>
      <div className="h-[400px] w-2/3 mx-auto border bg-white">
        <form className="flex bg-black">
          <textarea
            className="bg-black resize-none w-full outline-none px-2 text-white py-2"
            ref={textAreaRef}
            value={textAreaValue}
            name=""
            rows="1"
            placeholder="Enter Your Todo"
          />
          <button type="submit" className="bg-black text-white p-3 border-l-2">
            Add
          </button>
        </form>
        <div className="bg-white h-full">
          <div className="flex justify-center">
            <Image src={list} className="w-40 m-10 "></Image>
          </div>
          <div className="text-center">
            <h1 className="font-extrabold text-4xl tracking-wide ">Add your first task</h1>
            <p className="pt-9 text-xl font-bold">What will you work on today?</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
