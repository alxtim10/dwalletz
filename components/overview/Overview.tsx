import { TrendingUpDown } from 'lucide-react'
import React from 'react'

const Overview = () => {
  return (
    <div className="mt-7 bg-gradient-to-bl h-[140px] p-5 from-[#5528d1] to-[#040c75] rounded-[2.1rem] text-white shadow-lg">
        <h1 className="font-semibold text-lg">Total Balance</h1>
        <h1 className="font-bold text-3xl mt-1">$24,164.35</h1>
        <div className="flex items-center mt-[2px] text-red-300">
          <TrendingUpDown className=" h-4" />
          <h1 className="font-normal text-sm">-$1,200 (5%)</h1>
        </div>
      </div>
  )
}

export default Overview