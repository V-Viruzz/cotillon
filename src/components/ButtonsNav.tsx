'use client'
import { useState, useRef } from 'react'
import MenuBurguerIcon from '@/components/icons/MenuBurguerIcon'
import SearchIcon from '@/components/icons/SearchIcon'
import SearchBar from '@/components/SearchBar'

function ButtonsNav () {
  const [isHidden, setHidden] = useState(true)
  const searchRef = useRef<HTMLInputElement>()

  const handleClick = () => {
    console.log('click')
    setTimeout(() => {
      if (typeof searchRef.current !== 'undefined') searchRef.current.focus()
    }, 200)
    setHidden(false)
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
        onClick={handleClick}
      />
      <MenuBurguerIcon
        width={28}
        height={28}
      />

    </>
  )
}

export default ButtonsNav
