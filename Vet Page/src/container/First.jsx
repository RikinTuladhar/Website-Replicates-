import React from "react";

const first = () => {
  return (
    <div className=" relative w-full bg-no-repeat bg-cover bg-center h-[100vh] bg-[url(/first.svg)]">
      <div className="left-[20%] top-10 absolute flex justify-center flex-col items-center">
        <h1 className="text-4xl font-bold text-[#17224d]">
          We provide the best care to our furry friends!
        </h1>
        <h1 className="text-[#231f20] text-2xl font-semibold">
          Top Quality of Pet Product Store.
        </h1>
      </div>
    </div>
  );
};

export default first;
