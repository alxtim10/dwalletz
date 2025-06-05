'use client'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { market_data } from "@/constants";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useDrawerCoins } from "./hooks";
import { useState } from "react";
import { SelectedCoins } from "@/interfaces";

interface DrawerCoinsProps {
  image: string;
  symbol: string;
  disabled?: boolean;
  setSelected?: React.Dispatch<React.SetStateAction<SelectedCoins>>
}

export default function DrawerCoins({
  image,
  symbol,
  disabled,
  setSelected
}: DrawerCoinsProps) {

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button disabled={disabled} className="flex items-center gap-1">
          <Image
            src={image}
            alt="symbol"
            width={20}
            height={20}
          />
          <span className="uppercase font-bold ml-1 mt-1">
            {symbol}
          </span>
          {!disabled && <ChevronDown className="w-4 mt-1" />}
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-h-[550px] overflow-auto custom-scrollbar">
          <DrawerHeader>
            <DrawerTitle>Choose Coins</DrawerTitle>
          </DrawerHeader>
          <div>
            {market_data.map((item, i) => {
              const random = Math.random();
              const price = random * item.current_price;
              const roundedNumber = Math.round(random * 1000) / 1000;
              const roundedResult = Math.round(price * 100) / 100;

              return (
                <DrawerClose
                  key={i}
                  className="w-full cursor-pointer hover:bg-[#131313] transition-all px-4 py-2"
                  onClick={() => {
                    setSelected && setSelected({
                      image: item.image,
                      symbol: item.symbol
                    })
                  }}
                >
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
                    <h1>{roundedResult} USDT</h1>
                  </div>
                </DrawerClose>
              );
            })}
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <button>Cancel</button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
