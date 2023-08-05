'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/about-us' },
  { name: 'News', href: '/news' },
  { name: 'Educational', href: '/education' },
  { name: 'Events', href: '/events' },
  { name: 'Online Store', href: '/online-store' },
  { name: 'Contact', href: '/contact' },
]

function Sidebar() {
  const pathname = usePathname()

  const isActiveLink = 'font-rubik text-primary-color font-[18px] font-medium'
  const inActiveLink = 'font-rubik text-white font-[18px] font-normal'

  return (
    <section className='flex flex-col pl-8 h-screen w-[60%] fixed overflow-hidden bg-teal-colorish pt-[20px] lg:relative'>
      <aside>
        <ul className='flex flex-col gap-[10px]'>
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
      </aside>
    </section>
  )
}

export default Sidebar

// ${menuOpen ? 'flex' : 'hidden'}

/* className={` ${
  menuOpen ? 'flex translate-x-0' : 'hidden translate-x-full'
}`} */
