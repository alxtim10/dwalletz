import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div className='fixed top-4 left-4 z-10 flex items-center justify-center gap-1'>
            <Image src="/images/icon.png" alt="icon" width={30} height={30} />
            <h1 className='text-main font-bold'>dwalletz</h1>
        </div>
    )
}

export default Logo