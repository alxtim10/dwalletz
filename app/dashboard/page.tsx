import Overview from "@/components/overview/Overview";
import { market_data } from "@/constants";
import { ArrowDownUp } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">Asset Overview</h1>
        <button className="rounded-full bg-maintext h-8 w-8 shadow-md"></button>
      </div>
      <Overview />

      <div className="w-full flex text-center mt-5 items-center justify-center divide-x-[2px] divide-gray-500">
        <h1 className="w-full font-bold text-[#e0e0e0] cursor-pointer">Deposit</h1>
        <h1 className="w-full font-bold text-[#e0e0e0] cursor-pointer">Reduce</h1>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <h1 className="font-bold">Assets</h1>
        <ArrowDownUp className="w-4"/>
      </div>
      <div>
        {market_data.slice(0, 9).map((item, i) => {
          const random = Math.random();
          const price = random * item.current_price;
          const roundedNumber = Math.round(random * 1000) / 1000;
          const roundedResult = Math.round(price * 100) / 100;

          return (
            <div key={i} className="mt-4 w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={20}
                    height={20}
                  />
                  <h1 className="text-sm font-bold">
                    {item.symbol.toUpperCase()}
                  </h1>
                </div>
                <h1 className="font-bold text-sm">{roundedNumber}</h1>
              </div>
              <div className="flex items-center justify-between text-subtitle text-sm mt-1">
                <h1 className="text-ellipsis max-w-44 line-clamp-1">
                  {item.name}
                </h1>
                <h1 className="">{roundedResult} USDT</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
