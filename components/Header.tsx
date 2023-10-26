import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
 <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>

    <div className='flex items-center space-x-2 '>

        <Link href='/'>
        <Image 
className=" object-cover"
height={50}
width={50}
src='/color.png'
alt='logo'
/>



        </Link>

        <h1>

    Villa Jahawi Blog
</h1>
    </div>

    <div>
        <Link href="#"   className='px-5 py-3 text-sm md:text-base bg-gray-500 tex--black flex items-center rounded full text-center'>
            Sign Up
        </Link>
    </div>
 </header>
  )
}

export default Header