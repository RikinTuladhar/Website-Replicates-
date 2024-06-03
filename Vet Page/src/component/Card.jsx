import React from "react";

const Card = () => {
  return (
    <div className="border-gray-300 space-y-5  pb-5 border w-[333.068px] rounded-xl h-[ 187.906px]">
      <div>
        <img src="/Dog1.svg" alt="" />
      </div>
      <div className="px-5">
        <h1 className="text-xl font-bold text-[#17224d]">Dog/Cat Grooming</h1>
      </div>
      <div className="px-5">
        <p className="text-sm">
          We are enhancing our skills, salon and equipment to meet the
          challenges of pet gromming.
        </p>
      </div>
      <div className=" w-full grid place-content-center">
        <button className="bg-[#17224d] px-3 py-2 rounded-xl text-[#ffffff]">
          View More
        </button>
      </div>
    </div>
  );
};

export default Card;
