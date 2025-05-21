import Overview from "@/components/overview/Overview";
import React from "react";

export default function page() {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">Asset Overview</h1>
        <div className="rounded-full bg-[#5528d1] h-8 w-8 shadow-md"></div>
      </div>
      <Overview />

      <div className="w-full flex text-center mt-5 items-center justify-center divide-x-[2px] divide-gray-300">
        <h1 className="w-full font-bold text-[#525252]">Deposit</h1>
        <h1 className="w-full font-bold text-[#525252]">Reduce</h1>
      </div>

      <div className="mt-6">
        <h1 className="font-bold">Assets</h1>
      </div>
    </div>
  );
}
