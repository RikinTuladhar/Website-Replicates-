import React from "react";

const DogCards = () => {
  return (
    <div className="md:w-[273.903px] px-2 py-1 rounded-xl border border-[#D1D5DB] md:h-[343.87px]">
      <div className="w-full">
        <img
          src="/GoldenRetriver.jpg"
          className="rounded-lg"
          width={"100%"}
          alt=""
        />
      </div>
      <div className="w-full px-2 mt-2">
        <div>
          <h3 className=" text-xl font-bold text-[#17224d]">Golden Retriver</h3>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[#515151] ">Gender: Male</span>
          <span className="text-[#515151] ">Gender: 2 months</span>
        </div>
      </div>
    </div>
  );
};

export default DogCards;
