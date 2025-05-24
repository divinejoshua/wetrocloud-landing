"use client"
import Image from 'next/image'

import headerLogo from '@/app/assets/img/header-logo.png'
import aiMagicIcon from '@/app/assets/img/ai-magic-icon.png'
import hamburgerMenuIcon from '@/app/assets/img/hamburger-menu-icon.png'
import Link from 'next/link'
 
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { BLOG_URL, CONSOLE_URL, DOCS_URL, PLAYGROUND_URL } from '../constants/constants'
import CookieConsent from './CookieConcentModal'

export default function HeaderComponent() {
  // Hooks
  const pathname = usePathname();
  const [isMenuOpen, setisMenuOpen] = useState<boolean>(false);

  return (
    <header className="w-full fixed top-0 z-20">
      <CookieConsent />
      {/* Main Nav */}
      <nav className="w-full bg-white shadow-sm p-4">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={headerLogo} alt="Wetrocloud" className="header-logo w-8 h-8" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/pricing" className={`hover:text-blue-600 transition ${pathname === '/pricing' ? 'text-blue-600 font-semibold' : 'text-gray-900'}`}>Pricing</Link>
            <a href={DOCS_URL} target="_blank" className="hover:text-blue-600 transition text-gray-900">Docs</a>
            <a href={PLAYGROUND_URL} target="_blank" className="hover:text-blue-600 transition text-gray-900">Playground</a>
            <a href={BLOG_URL} target="_blank" className="hover:text-blue-600 transition text-gray-900">Blog</a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href={CONSOLE_URL} target="_blank" className="px-4 py-2 rounded-full text-gray-900 hover:bg-gray-100 transition">Login</a>
            <a href={CONSOLE_URL} target="_blank" className="px-6 py-2 rounded-full bg-blackconstant text-white hover:bg-gray-800 transition shadow-sm">Register</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setisMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
          >
            <Image src={hamburgerMenuIcon} alt="Menu" className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col bg-white border-t border-gray-200 px-4 pt-2 pb-4 gap-2`}> 
          <Link href="/pricing" className="py-2 text-gray-900 hover:text-blue-600 transition">Pricing</Link>
          <a href={DOCS_URL} target="_blank" className="py-2 text-gray-900 hover:text-blue-600 transition">Docs</a>
          <a href={PLAYGROUND_URL} target="_blank" className="py-2 text-gray-900 hover:text-blue-600 transition">Playground</a>
          <a href={BLOG_URL} target="_blank" className="py-2 text-gray-900 hover:text-blue-600 transition">Blog</a>
          <a href={CONSOLE_URL} target="_blank" className="py-2 text-gray-900 hover:bg-gray-100 rounded-full transition">Login</a>
          <a href={CONSOLE_URL} target="_blank" className="py-2 bg-black text-white rounded-full text-center hover:bg-gray-800 transition shadow-sm">Register</a>
        </div>
      </nav>

      {/* Announcement Bar */}
      <a href={CONSOLE_URL} target="_blank">
        <div className="w-full bg-blackconstant text-white text-sm flex items-center justify-center gap-4 px-4 py-2 shadow-sm">
          <Image src={aiMagicIcon} alt="Wetrocloud" className="ai-magic-icon" />
          <span className="flex items-center gap-1 bg-white text-black rounded-full px-3 py-1 text-xs font-semibold">
            New
          </span>

          <span className="cursor-pointer text-white">
            Introducing the new Wetrocloud Data Extraction API 🚀 · Get&nbsp;Started&nbsp;→
          </span>
        </div>
      </a>
    </header>
  );
}
