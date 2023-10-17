import React from "react";
import './Header.css';


function Header() {
  return (
    <div className="header-body bg-white">
      <div className="w-full mt-32 bg-blue-100 pb-32 absolute">
        <h3 className="ml-32 text-6xl font-semibold opacity-90 pt-24">
          Call us
        </h3>
        <p className="underline decoration-gray-500 ml-32 text-base pt-1">+91 9354566860</p>

        <h3 className="ml-32 text-6xl font-semibold opacity-90 pt-10">
          Location
        </h3>
        <p className="ml-32 text-base pt-1">Ghaziabad, Uttar Pradesh</p>

        <h3 className="ml-32 text-6xl font-semibold opacity-90 pt-10">
          Mail us
        </h3>
        <a href="/" className="ml-32 text-base pt-1">
          info@markall.in
        </a>
      </div>

      <div className="submit-conatiner mt-10 bg-white w-2/5 p-5 pl-20 shadow-2xl absolute pb-20 rounded-3xl">
        <h3 className="text-6xl pt-10">Contact Now</h3>
        <p className="font-medium opacity-80 text-gray-600 mt-7 pr-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          error similique sed iure ipsum tempore labore nobis magni omnis hic id
          accusantium quia dolore, magnam aliquid. Nemo, ducimus!
        </p>

        <form className="text-xl mt-10">
          <input
            type="text"
            placeholder="Name*"
            className="ml-20 decoration-gray-200 border-b w-96 pb-1 p-4 rounded-2xl "
          />
          <br />
          <input
            type="text"
            placeholder="Email*"
            className="ml-20 decoration-gray-200 border-b w-96 pb-1 mt-7 p-4 rounded-2xl"
          />
          <br />
          <input
            type="text"
            placeholder="Phone*"
            className="ml-20 decoration-gray-200 border-b w-96 mt-7 pb-1 p-4 rounded-2xl"
          />
          <br />
          <input
            type="text"
            placeholder="Message*"
            className="ml-20 decoration-gray-200 border-b w-96 mt-7 pb-1 p-4 rounded-2xl"
          />
          <br />
          <button type="submit" className="text-white bg-blue-500 ml-20 mt-10 p-3 rounded-2xl hover:bg-white hover:text-blue-600">Submit Form</button>
        </form>
      </div>
    </div>
  );
}

export default Header;
