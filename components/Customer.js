import React from "react";

function Customer() {
  return (
    <div className="flex flex-row bg-yellow-100 w-full pb-10">
      <div className="w-7/12">
        <h4 className=" text-4xl mt-10 pl-10">OUR HAPPY CUSTOMERS</h4>

        <h3 className="text-8xl font-bold pl-10">
          What our customers <br /> say about us
        </h3>
        <hr className=" h-0.5 my-10 ml-10  bg-gray-200 border-0 dark:bg-black" />
      </div>

      <div className=" text-emerald-900">
        <p className="mt-96 ml-60 text-3xl mr-10 ">
          Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit.
          Praesentium autem vitae <br /> illo quidem porro dolorem voluptates,
          velit <br /> quas consequuntur enim quod rerum officiis eveniet.
        </p>

        <h4 className="ml-60 text-4xl font-medium pt-5">Jane Doe</h4>
        <p className="ml-60 text-3xl">Product Specialist, Lorem Co.</p>
      </div>
    </div>
  );
}

export default Customer;
