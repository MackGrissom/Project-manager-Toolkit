import { User } from '@clerk/nextjs/server'
import Image from 'next/image'
import React from 'react'

type Props = {
    user?:null| User

}

const Navigation = (props: Props) => {
  return <div className="flex items-center p-4 justify-between relative">
    <aside className='flex items-center gap-2'>
        <Image src={'./assets/zenkitlogo.svg'}
        width={40}
        height={40} 
        alt="logo"/>
<span className='text-xl font-bold'>ZenKit.</span>
         </aside>
  </div>
}

export default Navigation