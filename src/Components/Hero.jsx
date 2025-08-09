import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="px-5 xl:px-10 md:w-1/2 mb-10">
      <h1 className="mt-6 mb-10 text-4xl xl:text-6xl text-center font-bold text-[#2A3342] leading-normal xl:leading-relaxed">
        Quick and Tasty Meal<span className="text-orange-300"> Ideas</span>{" "}
      </h1>
      <form
        action="/search"
        className="bg-white flex items-center p-4 rounded relative border border-gray-300"
      >
        <IoSearchOutline className="w-5 h-5 text-neutral-300 mr-2" />
        <input
          className="outline-none w-full placeholder:text-[#1b2629]"
          name="query"
          type="search"
          placeholder="search for a recipes"
          id="search"
          required=""
        />
      </form>
    </div>
  );
};

export default Hero;
