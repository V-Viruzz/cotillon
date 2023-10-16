'use client'
import { useMenuContext } from '@/context/NavMenuContext'
import Link from 'next/link'

function NavMenu () {
  const { isMenuHidden, setMenuHidden } = useMenuContext()

  const handleClick = () => {
    setMenuHidden(!isMenuHidden)
  }

  return (
    <nav className={`bg-white dark:bg-black z-50 w-screen h-screen mt-[var(--header-height)] fixed md:hidden ${isMenuHidden ? 'hidden' : 'block'}`}>
      <ul className='grid grid-cols-1 grid-rows-3 px-4 h-[20%] w-full divide-solid divide-y dark:divide-zinc-700 divide-zinc-300 font-semibold text-lg'>

        <li className=''>
          <Link href='/'>
            <div
              className='h-full flex items-center'
              onClick={handleClick}>
              Inicio
            </div>
          </Link>
        </li>

        <li className=''>
          <Link href='/shop'>
            <div
              className='h-full flex items-center '
              onClick={handleClick}>
              Tienda
            </div>
          </Link>
        </li>

        <li className=''>
          <Link href='/contact'>
            <div
              className='h-full flex items-center '
              onClick={handleClick}>
              Contacto
            </div>
          </Link>
        </li>

      </ul>
    </nav>
  )
}

export default NavMenu
