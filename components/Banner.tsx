import React from 'react'

const Banner = () => {
  return (
<div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10 '>

<h1 className="text-7xl">
    Mcwachira's Daily's Blog

</h1>

<h2 className="mt-5 md:mt-0">

    Welcome to   <span className="underline decoration-4 decoration-[#74ab0a] ">

        Every Developer's
        </span>  

favorite Blog in the devosphere 
</h2>
    <div>


    </div>

    <p className=" mt-5 md:mt-2 text-gray-400 max-w-sm">
        New Product features | The latest in Technology | The weekly debugging nightmare & More

    </p>
</div>
  )
}

export default Banner