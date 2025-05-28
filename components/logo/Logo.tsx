import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div className='fixed w-full top-0 left-0 z-10 flex items-center gap-1 bg-white p-4'>
            <Image src="/images/icon.png" alt="icon" width={30} height={30} />
            <h1 className='text-main font-bold'>dwalletz</h1>
        </div>
    )
}

export default Logo