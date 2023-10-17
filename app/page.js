import Image from "next/image";
import React from "react";
import tailwindConfig from "@/tailwind.config";
import './Page.css';

export default function Home() {
  return (
    <div className="body bg-black pt-5 pb-40 text-white">
      <div className="absolute w-full"></div>
      <div className="flex px-20 mt-24 ">
        <div className="mr-5 mt-20 font-medium">
          <h1 className="text-8xl ">
            Reach your -<br />
            <span className="underline underline-offset-4 decoration-2 decoration-double   mr-5">
              audience
            </span>
            & convert your leads
          </h1>

          <p className="mt-20 text-2xl font-light">
            Get your customers with SEO, rank your business with email marketing
          </p>

          <button
            type="button"
            className=" bg-green-400 p-2 rounded-lg mt-5 mr-10 text-black text-2xl  hover:text-green-600 hover:bg-black "
          >
            Get Started
          </button>

          <button
            type="button"
            className="border-solid border-2 white-500 p-2 rounded-lg mt-5 text-2xl text-white hover:bg-white hover:text-black"
          >
            Watch Demo
          </button>
        </div>
        <div>
          <img src="/img1.png" alt="" width={1000} height={1000} />
        </div>
      </div>
    </div>
  );
}
