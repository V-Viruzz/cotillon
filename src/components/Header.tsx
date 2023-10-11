import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/../public/image/logo-s.webp'
import ButtonsNav from '@/components/ButtonsNav'

function Header () {
  return (
    <header className='bg-white dark:bg-black h-[var(--header-height)] px-[--width-page] w-full fixed z-10 '>
      <div className='md:grid-cols-3 grid grid-cols-2  h-full w-full relative'>
        <nav className='hidden md:flex md:items-center'>
          <ul className='flex gap-9 text-xl font-semibold'>
            <li>
              <Link href='/'>
                Inicio
              </Link>
            </li>
            <li>
              <Link href='/shop'>
                Tienda
              </Link>
            </li>
            <li>
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
  )
}

export default Header
