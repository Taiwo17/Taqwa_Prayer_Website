'use client'
import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { GrClose } from 'react-icons/gr'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Sidebar from './Sidebar'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/about-us' },
  { name: 'News', href: '/news' },
  { name: 'Educational', href: '/education' },
  { name: 'Events', href: '/events' },
  { name: 'Online Store', href: '/online-store' },
  { name: 'Contact', href: '/contact' },
]

function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActiveLink = 'font-rubik text-primary-color font-[18px] font-medium'
  const inActiveLink = 'font-rubik text-primary-color font-[18px] font-normal'

  return (
    <>
      <nav className='top-0 left-0 px-8 py-8 md:px-12 h-[80px] bg-white z-10 fixed w-full lg:px-[80px] lg:h-[100px]'>
        <header className='relative flex justify-between items-center'>
          <div className='shrink-0 self-start'>
            <Link href='/'>
              <img src='../../../images/logo.png' alt='logo image' />
            </Link>
          </div>
          <div className={`hidden lg:flex lg:items-center`}>
            <ul className='flex justify-between items-center lg:gap-10'>
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <li key={link.name}>
                    <Link
                      className={isActive ? isActiveLink : inActiveLink}
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='hidden lg:flex bg-teal-colorish py-4 px-8 rounded-[10px]'>
            <Link
              className='  font-rubik text-[18px] text-white font-medium'
              href='/donate'
            >
              Donate
            </Link>
          </div>
          <div className='lg:hidden'>
            <button
              className='flex items-center justify-center'
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? (
                <GrClose className='w-6 h-6' />
              ) : (
                <RxHamburgerMenu className='w-6 h-6' />
              )}
            </button>
          </div>
        </header>
      </nav>
      <div
        className={`lg:hidden pt-[80px]  duration-700  z-20 ${
          menuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
      >
        <Sidebar />
      </div>
    </>
  )
}

export default Navbar
