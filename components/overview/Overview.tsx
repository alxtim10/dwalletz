import { ChevronDown, TrendingUpDown } from 'lucide-react'
import React from 'react'

const Overview = () => {
  return (
    <div className="mt-7 h-[140px] p-5 
    bg-gradient-to-tr from-[#414040] to-[#2c2c2c] rounded-[2.1rem] 
    text-white shadow-lg">
        <h1 className="font-semibold text-lg">Total Balance</h1>
        <h1 className="font-bold text-3xl mt-2 flex text-maintext items-end gap-3">24,164.35 
          <span className='text-sm flex items-center gap-[2px] text-white'>USD <ChevronDown className='w-4'/></span> </h1>
        <div className="flex items-center mt-[2px] text-red-300">
          <TrendingUpDown className=" h-4" />
          <h1 className="font-normal text-sm">-1,200 (5%)</h1>
        </div>
      </div>
  )
}

export default Overview