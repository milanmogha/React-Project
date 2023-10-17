import React from "react";
import Image from "next/image";

function Mid() {
  return (
    <div className="bg-white mb-20">
      <div className="flex ">
        <div className="ml-10 mt-20">
          <h4 className="text-black text-4xl font-medium">OUR FEATURES</h4>

          <h2 className="text-black font-bold text-8xl ">
            Know your audience <br /> and boost sales
          </h2>
          <hr className=" h-0.5 my-10 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
        <div className="ml-32 mt-96">
          <p className="text-black text-4xl font-medium">
            Effective emails convey the most significant <br />
            substance to a client at the proper time which <br />
            is our marketing approaches include <br />
            scheduled emails.
          </p>
        </div>
      </div>

      <div className="flex mt-20 p-10 bg-neutral-100 ml-20 w-11/12 shadow-md rounded-3xl">
        <div className="text-black">
          <h2 className="text-6xl font-bold">
            Save precious time <br />
            with automation
          </h2>

          <p className="text-4xl mt-10 pb-10">
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Suscipit quaerat mollitia <br /> nemo vel pariatur neque dolores{" "}
            <br /> inventore, dolor in molestiae.
          </p>
          <a href="/" className="text-4xl font-semibold">
            Learn More
          </a>
        </div>
        <div>
          <Image
            src="/img2.png"
            width={600}
            height={600}
            className="ml-96 mt-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Mid;
