import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='relative w-[350px] h-[230px] mt-32'>
                <Image src="/images/hero.jpg" alt='hero' objectFit='cover' fill />
            </div>
            <h1 className="mt-3 bg-gradient-to-r text-center text-transparent inline-block bg-clip-text from-[#2D7FCA] via-[#2b71b2] to-[#093157] font-semibold">
                <span className='text-4xl font-bold'>Real-Time Wallet Tracking</span>
                <br />
                <span className='text-4xl font-bold'>Zero Guesswork</span>
            </h1>
            <h1 className='font-bold text-[14px] text-center mt-4 text-[#6e6e6e]'>Next-gen wallet tracking built for the decentralized future.</h1>
            <div className='flex items-center justify-center mt-5'>
                <button
                    className='shadow-xl bg-gradient-to-r from-[#2D7FCA] via-[#579bda] to-[#64a0d8] text-white px-5 py-3 rounded-sm font-bold'>
                    Manage Portofolio
                </button>
            </div>
        </div>
    )
}

export default Hero