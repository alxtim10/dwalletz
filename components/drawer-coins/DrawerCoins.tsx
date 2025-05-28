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
import Image from "next/image";

export default function DrawerCoins() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button>Open Drawer</button>
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
                <div key={i} className="w-full cursor-pointer hover:bg-[#131313] transition-all px-4 py-2">
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
