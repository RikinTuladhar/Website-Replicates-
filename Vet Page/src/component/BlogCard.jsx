import React from "react";

const BlogCard = () => {
  return (
    <div className="w-[340px] space-y-5 ">
      <div>
        <img src="/Dog2.svg" alt="" />
      </div>
      <div className="space-y-2">
        <h3 className="text-[#17224d] text-xl font-bold">
          How to Choose the Right Bully Stick for Your Dog
        </h3>
        <p className="text-[#515151] text-sm">
          Below is an excerpt of porch.com article “ Moving with Pets? We have
          the Experts advice to do it Properly.
        </p>
      </div>
      <div className="w-full ">
        <button className="px-3 py-2 rounded-lg text-white bg-[#17224d]">
          View Details
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
