import React from 'react'
import {    ArrowUturnLeftIcon} from '@heroicons/react/24/solid'
import Link from 'next/link'

const StudioNavbar = (props: { renderDefault: (arg0: any) => any }) => {
  return (
<div >


    <div className="flex items-center justify-between p-5" >


        <Link href="/" className='text-[#f7aboa] flex items-center'>
            <ArrowUturnLeftIcon className='h-6 w-6 text-[#f7aboa] mr-2'/>
            
            Go to Website</Link>
    </div>

    <>
    
    {props.renderDefault(props)}
    </>
</div>
  )
}

export default StudioNavbar