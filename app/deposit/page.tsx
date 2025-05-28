
import DrawerCoins from "@/components/drawer-coins/DrawerCoins";
import React from "react";

export default function page() {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">Asset Deposit</h1>
        <button className="rounded-full bg-maintext h-8 w-8 shadow-md"></button>
      </div>
      <DrawerCoins />
    </div>
  );
}
