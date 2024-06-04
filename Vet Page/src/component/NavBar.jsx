import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = () => {
  return (
    <div className="sticky border-b-2 shadow-lg top-0 z-50 w-full h-[101.998px] bg-[#f5fafa] flex justify-between px-24 items-center">
      <div className="text-3xl">Your Logo</div>
      <div>
        <GiHamburgerMenu  className="size-6"/>
      </div>
    </div>
  );
};

export default NavBar;
