import React from "react";
import DogCards from "../component/DogCards";

const Fifth = () => {
  return (
    <div className="bg-[#f5fafa] w-full space-y-5 py-10 px-10">
      <div className="flex flex-col items-center justify-center w-full gap-5 mb-20">
        <h1 className="text-4xl font-semibold text-[#17224d]">
          Out Pet Collections
        </h1>
        <p className="text-xl text-[#515151]">
          "Bring joy to your home with a furry companion from our pet
          selection."
        </p>
      </div>
      <div className="grid w-full grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-y-20">
        {Array.from({ length: 6 }, (_, i) => (
          <DogCards key={i} />
        ))}
      </div>
      <div className="flex items-center justify-center w-full ">
        <button className="bg-[#007fff] gap-8 rounded-full items-center flex justify-around  py-3">
          <div className="pl-5 text-[#ffffff]">View All</div>
          <div className="pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="text-primary iconify iconify--ic"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              color="#007fff"
              style={{ background: "#f5fafa", borderRadius: "50%" }}
            >
              <path
                fill="currentColor"
                d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Fifth;
