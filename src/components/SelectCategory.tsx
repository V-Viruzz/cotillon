'use client'
import { useState, useEffect, useId } from 'react'
import { useRouter } from 'next/navigation'

function SelectCategory () {
  const router = useRouter()
  const [category, setCategory] = useState<string>()
  const categoryFilterId = useId()

  useEffect(() => {
    const lastValue = window.location.pathname.split('/').pop()
    setCategory(lastValue)
  }, [])

  const handleChange = (e: any) => {
    const value = e.target.value
    router.push(`/shop/${value}`)
    setCategory(e.target.value)
  }

  return (
    <div>
      Categorias :
      <select
        className='bg-transparent text-black dark:text-white px-3 py-2 outline-none'
        name="category"
        id={categoryFilterId}
        value={category}
        onChange={handleChange}
      >

        <option value="globos">Globos</option>
        <option value="cumpleanos">Art - Feliz Cumpleaños</option>
        <option value="reposteria">Reposteria</option>
        <option value="descartable">Descartables</option>
      </select>
    </div>
  )
}

export default SelectCategory
