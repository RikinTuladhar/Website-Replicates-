import React from "react";

const Eigth = () => {
  return (
    <div className="w-full px-10 py-10 bg-[#17224d] ">
      {/* upper  */}
      <div className="flex flex-wrap items-center w-full h-full gap-10 justify-evenly">
        <div className="w-full md:w-[25%] h-full space-y-5 ">
          <div>
            <h1 className="text-3xl text-center text-white">Your Logo Here</h1>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl text-[#f5fafa]">Phone Number</h3>
            <h3 className="text-xl font-semibold text-white">
              +977-9861859764
            </h3>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl text-[#f5fafa]">Location</h3>
            <h3 className="text-xl font-semibold text-white">
              Tahachal-Kathmandu
            </h3>
          </div>
        </div>
        <div className="w-full md:w-[30%]">
          <p className="text-[#f5fafa]">
            "City Pet House & Animal Clinic: Quality and affordable animal care
            at your doorstep. Comprehensive, professional, and compassionate
            veterinary services by our dedicated and experienced team."
          </p>
        </div>
        <div className="w-full md:w-[10%] flex flex-col justify-center items-center md:block space-y-5">
          <h1 className="text-xl text-white">Menu</h1>
          <div className="space-y-2 text-white">
            <div>Home</div>
            <div>About</div>
            <div>Services</div>
            <div>Breeds</div>
            <div>Shop</div>
            <div>Gallery</div>
          </div>
        </div>
        <div className="w-full md:w-[20%] space-y-3  ">
          <h1 className="text-[#f5fafa] text-xl">Gallery</h1>
          <div className="grid grid-cols-2 grid-rows-2 gap-2 ">
            <div>
              <img src="/pug.png" alt="" />
            </div>
            <div>
              <img src="/cocotail.png" alt="" />
            </div>
            <div>
              <img src="/cocotail1.png" alt="" />
            </div>
            <div>
              <img src="/cocotail2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* lower  */}
      <hr className="my-5"/>
      <div className="w-full">
        <div>
          <h3 className="text-[#f5fafa]">Copyright © 2023 City Pet House & Animal Clinic | All Rights Reserved</h3>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Eigth;
