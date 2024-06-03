import React from "react";
import Card from "../component/Card";

const Fourth = () => {
  return (
    <div className="w-full pb-32 space-y-5 bg-[#f5fafa]">
      <div>
        <h1 className="w-full text-5xl text-center text-[#17224d]">
          Out Services
        </h1>
      </div>
      <div className="w-full px-10 ">
        <p className="mb-10 text-xl font-semibold text-center">
          We provide a wide range of products & services for pets such as food,
          toys, grooming supplies, and veterinary care. We aim to meet the needs
          of px-5nd ensure the health and happiness of their furry friends.
        </p>
      </div>
      <div className="grid grid-cols-1 px-10 md:grid-cols-3 md:grid-rows-2 gap-y-20">
        {Array.from({ length: 6 }, (_, i) => (
          <Card />
        ))}
      </div>
    </div>
  );
};

export default Fourth;
