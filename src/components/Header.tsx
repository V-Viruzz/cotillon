'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/../public/image/logo-s.webp'
import ButtonsNav from '@/components/ButtonsNav'
import NavMenu from './NavMenu'
import { MenuProvider } from '@/context/NavMenuContext'

function Header () {
  return (
    <>
      <MenuProvider>
        <header className='bg-[var(--background-start-rgb)] h-[var(--header-height)] px-[--width-page] w-full fixed z-10 shadow dark:shadow-xl'>
          <div className='md:grid-cols-3 grid grid-cols-2  h-full w-full relative'>
            <nav className='hidden md:flex md:items-center'>
              <ul className='flex gap-9 text-xl font-semibold'>
                <li className='transition-colors duration-75 hover:text-[#49b5f6] dark:hover:text-white'>
                  <Link href='/'>
                    Inicio
                  </Link>
                </li>
                <li className='transition-colors duration-75 hover:text-[#49b5f6] dark:hover:text-white'>
                  <Link href='/shop'>
                    Tienda
                  </Link>
                </li>
                <li className='transition-colors duration-75 hover:text-[#49b5f6] dark:hover:text-white'>
                  <Link href='/contact'>
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>
            <div className='flex justify-start items-center md:justify-center'>
              <Link href='/'>
                <Image
                  src={Logo}
                  width={110}
                  height={110}
                  priority={true}
                  alt="logo"
                />
              </Link>
            </div>
            <div className='flex justify-end items-center gap-2'>
              <ButtonsNav />
            </div>
          </div>
        </header>
        <NavMenu />
      </MenuProvider>
    </>
  )
}

export default Header
