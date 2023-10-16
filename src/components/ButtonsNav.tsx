'use client'
import { useState, useRef } from 'react'
import MenuBurguerIcon from '@/components/icons/MenuBurguerIcon'
import SearchIcon from '@/components/icons/SearchIcon'
import SearchBar from '@/components/SearchBar'
import { useMenuContext } from '@/context/NavMenuContext'
import CloseIcon from './icons/CloseIcon'

function ButtonsNav () {
  const { isMenuHidden, setMenuHidden } = useMenuContext()
  const [isHidden, setHidden] = useState(true)
  const searchRef = useRef<HTMLInputElement>()

  const handleSearchClick = () => {
    setTimeout(() => {
      if (typeof searchRef.current !== 'undefined') searchRef.current.focus()
    }, 200)
    setHidden(false)
  }
  const handleMenuClick = () => {
    const body = document.querySelector('body')
    if (body !== null) {
      body.style.overflow = isMenuHidden ? 'hidden' : ''
    }
    setMenuHidden(!isMenuHidden)
  }

  return (
    <>
      <SearchBar
        searchRef={searchRef}
        isHidden={isHidden}
        setHidden={setHidden}
      />
      <SearchIcon
        className={`${isHidden ? '' : 'hidden'}`}
        width={28}
        height={28}
        onClick={handleSearchClick}
      />
      <MenuBurguerIcon
        className={`${isMenuHidden ? 'block' : 'hidden'} md:hidden`}
        width={28}
        height={28}
        onClick={handleMenuClick}
      />
      <CloseIcon
        className={`${isMenuHidden ? 'hidden' : 'block'}  md:hidden`}
        width={28}
        height={28}
        onClick={handleMenuClick}
      />

    </>
  )
}

export default ButtonsNav
