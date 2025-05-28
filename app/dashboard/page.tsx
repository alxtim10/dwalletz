import Logo from '@/components/logo/Logo'
import { market_data } from '@/constants'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div>
      <Logo />
      <div className='mt-14 mb-6 rounded-2xl bg-gradient-to-tr from-main to-[#1c2095] text-white p-4 shadow-sm'>
        <h1 className='font-bold text-sm'>Total Balance</h1>
        <h1 className='font-bold text-2xl'>96,502 <span className='text-sm'>USD</span></h1>
      </div>
      <h1 className='font-bold'>Assets List</h1>
      <div>
        {market_data.slice(0,9).map((item, i) => {

          let random = Math.random();
          let price = random * item.current_price;
          const roundedNumber = Math.round(random * 1000) / 1000;
          const roundedResult = Math.round(price * 100) / 100;

          return (
            <div key={i} className='mt-4 w-full'>
              <div className='flex items-center justify-between w-full'>
                <div className='flex items-center gap-2'>
                  <Image src={item.image} alt={item.name} width={20} height={20} />
                  <h1 className='text-sm font-bold'>{item.symbol.toUpperCase()}</h1>
                </div>
                <h1 className='font-bold text-sm'>{roundedNumber}</h1>
              </div>
              <div className='flex items-center justify-between text-subtitle text-sm mt-1'>
                <h1 className='text-ellipsis max-w-44 line-clamp-1'>{item.name}</h1>
                <h1 className=''>{roundedResult} USDT</h1>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
