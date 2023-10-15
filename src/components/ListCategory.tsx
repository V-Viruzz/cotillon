'use client'
import { useRouter } from 'next/navigation'
import { CATEGORY } from '@/static/category'

function ListCategory () {
  const router = useRouter()

  return (
    <>
      <h3 className='text-xl text-[#49b5f6]'>Categorias</h3>
      <ul>
        <li className='hover:text-[#49b5f6] transition-colors duration-75 cursor-pointer' onClick={() => { router.push(`/shop/${CATEGORY.GLOBOS}`) }}>
          Globos
        </li>
        <li className='hover:text-[#49b5f6] transition-colors duration-75 cursor-pointer' onClick={() => { router.push(`/shop/${CATEGORY.DESCARTABLES}`) }}>
          Descartables
        </li>
        <li className='hover:text-[#49b5f6] transition-colors duration-75 cursor-pointer' onClick={() => { router.push(`/shop/${CATEGORY.REPOSTERIA}`) }}>
          Reposteria
        </li>
        <li className='hover:text-[#49b5f6] transition-colors duration-75 cursor-pointer' onClick={() => { router.push(`/shop/${CATEGORY.ART_FELIZ_CUMPLEANOS}`) }}>
          Art. feliz cumpleaños
        </li>
      </ul>
    </>
  )
}

export default ListCategory
