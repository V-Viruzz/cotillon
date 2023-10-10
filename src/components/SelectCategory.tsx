'use client'
import { useState, useEffect, useId } from 'react'
import { useRouter } from 'next/navigation'
import { CATEGORY } from '@/static/category'

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

        <option value={CATEGORY.GLOBOS}>Globos</option>
        <option value={CATEGORY.ART_FELIZ_CUMPLEANOS}>Art - Feliz Cumpleaños</option>
        <option value={CATEGORY.REPOSTERIA}>Reposteria</option>
        <option value={CATEGORY.DESCARTABLES}>Descartables</option>
      </select>
    </div>
  )
}

export default SelectCategory
