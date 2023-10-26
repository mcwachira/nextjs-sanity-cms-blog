import Image from 'next/image'
import React from 'react'

const Logo = (props: { renderDefault: any; title: any } ) => {

    const {renderDefault, title} = props
  return (
    <div>

<Image 
className="rounded-full object-cover"
height={50}
width={50}
src='/color.png'
alt='logo'
/>

<>
{renderDefault(props)}</>
    </div>
  )
}

export default Logo