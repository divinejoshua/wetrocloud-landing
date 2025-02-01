"use client"
import Image from 'next/image'

import headerLogo from '@/app/assets/img/header-logo.png'
import hamburgerMenuIcon from '@/app/assets/img/hamburger-menu-icon.png'
import Link from 'next/link'
 
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function HeaderComponent() {
  // Hooks
  const pathname = usePathname()

  // Data
  const [isMenuOpen, setisMenuOpen] = useState<boolean>(false)


  return (
    <nav className="w-full bg-white border-b border-gray-200 p-4 fixed top-0 z-10">
      <div className="mx-auto max-width-90 flex justify-between items-center">
      <Link href={"/"} className="">
        <Image src={headerLogo} alt="Wetrocloud" className='header-logo'/>
      </Link>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2"
        onClick={() => setisMenuOpen(!isMenuOpen)}
      >
        <Image src={hamburgerMenuIcon} alt="Wetrocloud" className='menu-icon'/>
      </button>

      {/* Desktop and Mobile Menu */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 md:space-x-10 shadow-lg md:shadow-none`}>
        <Link href="/pricing" className={`py-2 hover:text-default ${pathname === '/pricing' ? 'text-blue-500' : 'text-gray-800'}`}>Pricing</Link>
        <a href="#" className="py-2 text-gray-800 hover:text-default">Developer</a>
        <a href="#" className="py-2 text-gray-800 hover:text-default">Playground</a>
        <a href="#" className="py-2 text-gray-800 hover:text-default">Blog</a>
        <a href="#" role='button' className="py-2 md:border-l md:border-gray-200 md:pl-6 text-gray-800 hover:text-default">Register</a>
        <button className="mt-4 md:mt-0 bg-black text-white px-6 py-2 rounded-sm hover:bg-blue-950">Login</button>
      </div>
      </div>
    </nav>

  )
}
