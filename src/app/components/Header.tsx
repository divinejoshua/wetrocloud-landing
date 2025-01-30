import React from 'react'
import Image from 'next/image'

import headerLogo from '@/app/assets/img/header-logo.png'

export default function HeaderComponent() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 p-4 fixed top-0 z-10">
    <div className="mx-auto max-width-90 flex justify-between items-center">
      <div className="">
        <Image src={headerLogo} alt="Wetrocloud" className='header-logo'/>
    </div>
      <div className="flex space-x-10">
        <a href="#" className="py-2 text-gray-800 hover:text-default">Pricing</a>
        <a href="#" className="py-2 text-gray-800 hover:text-default">Developer</a>
        <a href="#" className="py-2 text-gray-800 hover:text-default">Blog</a>
        <a href="#" role='button' className="border-l border-gray-200 pl-6 py-2 text-gray-800 hover:text-default">Register</a>
        <button role='button' className="bg-black text-white px-6 py-2 rounded-sm hover:bg-blue-950">Login</button>
      </div>
    </div>
  </nav>

  )
}
