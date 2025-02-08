"use client"
import Image from 'next/image'

import headerLogo from '@/app/assets/img/header-logo.png'
import hamburgerMenuIcon from '@/app/assets/img/hamburger-menu-icon.png'
import Link from 'next/link'
 
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { BLOG_URL, CONSOLE_URL, DOCS_URL } from '../constants/constants'

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
        <a href={DOCS_URL} target='_blank' className="py-2 text-gray-800 hover:text-default">Developer</a>
        <span className="py-2 text-gray-400">Playground</span>
        <a href={BLOG_URL} target='_blank' className="py-2 text-gray-800 hover:text-default">Blog</a>
        <a href={CONSOLE_URL} target='_blank'><button className="mt-4 md:mt-0 bg-black text-white px-6 py-2 rounded-sm hover:bg-blue-950">Go to console</button></a>
      </div>
      </div>
    </nav>

  )
}
