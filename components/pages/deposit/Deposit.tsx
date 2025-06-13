"use client";
import DrawerCoins from "@/components/drawer-coins/DrawerCoins";
import { market_data } from "@/constants";
import { SelectedCoins } from "@/interfaces";
import { ArrowDown, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";


const Deposit = () => {
  const router = useRouter();
  const [capital, setCapital] = useState<string>(''); // use string instead of number
  const [receive, setReceive] = useState<string>('0');
  const [selected, setSelected] = useState<SelectedCoins>({
    image: market_data[0].image,
    symbol: market_data[0].symbol,
    current_price: market_data[0].current_price
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setCapital(input);

    const parsed = parseFloat(input);
    if (!isNaN(parsed) && parsed >= 10) {
      const coin = market_data.find((data) => data.symbol === selected.symbol);
      if (coin) {
        const size = parsed / coin.current_price;
        setReceive(size.toFixed(8));
      }
    } else {
      setReceive('0');
    }
  };

  return (
    <section className="p-5 h-screen flex flex-col items-center justify-between w-full">
      <div className="w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center gap-5">
            <ArrowLeft 
            onClick={() => {
              router.back();
            }}
            className="w-5 cursor-pointer" />
            <h1 className="font-bold text-xl">Asset Deposit</h1>
          </div>
          <button className="rounded-full bg-maintext h-8 w-8 shadow-md"></button>
        </div>
        <div className="relative">
          <ArrowDown className="p-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#3f3f3f] rounded-full " />
          <div className="bg-[#2c2c2c] p-5 mt-10 rounded-2xl w-full">
            <h1 className="text-xs">Capital</h1>
            <div className="flex items-center justify-between mt-3">
              <DrawerCoins
                disabled
                symbol="USDT"
                image="https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661"
              />
              <input
                type="text"
                value={capital ?? ''}
                onChange={handleChange}
                className="bg-transparent text-right focus:outline-0 placeholder:text-[#707070]"
                placeholder="10.00 - 1000.00"
              />
            </div>
          </div>
          <div className="bg-[#2c2c2c] p-5 mt-3 rounded-2xl">
            <h1 className="text-xs">Receive</h1>
            <div className="flex items-center justify-between mt-3">
              <DrawerCoins
                symbol={selected.symbol}
                image={selected.image}
                setSelected={setSelected}
              />
              <p
                className={`${receive == '0' ? 'text-[#707070]' : 'text-white'} bg-transparent text-right`}>
                {receive == '0' ? 0 : receive}
              </p>
            </div>
          </div>
        </div>
        <h1 className="text-center text-xs mt-2 text-[#707070]">1 USDT = {(1 / selected.current_price).toFixed(12)} {selected.symbol.toUpperCase()}</h1>
      </div>
      <div className="w-full pb-10">
        <button className="text-sm w-full bg-maintext text-black p-3 rounded-lg font-bold mt-5">
          Deposit
        </button>
      </div>
    </section>
  );
};

export default Deposit;
