import React from "react";

const Sixth = () => {
  return (
    <div className="hidden w-full px-2 py-10 md:block">
      <div className="relative w-full h-full ">
        <img
          src="/DogWithGlass.png"
          className="object-cover w-full h-full"
          alt=""
        />
        <div className="absolute z-50 top-[25%] left-[5%]">
          <div className="w-full space-y-5">
            <h3 className="text-[#f5fafa] text-2xl">
              One More Friend Thousands More Fun!
            </h3>
            <h1 className="text-[#f5fafa] text-3xl font-bold">
              "Find your furry soulmate at Our Pet Shop."
            </h1>
            <div className="w-full ">
              <button className="bg-[#f5fafa] gap-8 rounded-full items-center flex justify-around  py-3">
                <div className="pl-5 text-[#ff960c]">Get Now</div>
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
                    color="#f5fafa"
                    style={{ background: "#ff960c", borderRadius: "50%" }}
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
        </div>
      </div>
    </div>
  );
};

export default Sixth;
