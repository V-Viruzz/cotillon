'use client'
import { useRouter } from 'next/navigation'

function ListCategory () {
  const router = useRouter()

  return (
    <>
      <h3 className='text-xl text-[#49b5f6]'>Categorias</h3>
      <ul>
        <li className='hover:text-[#49b5f6] cursor-pointer' onClick={() => { router.push('/shop/globos') }}>
          Globos
        </li>
        <li className='hover:text-[#49b5f6] cursor-pointer' onClick={() => { router.push('/shop/descartable') }}>
          Descartables
        </li>
        <li className='hover:text-[#49b5f6] cursor-pointer' onClick={() => { router.push('/shop/reposteria') }}>
          Reposteria
        </li>
        <li className='hover:text-[#49b5f6] cursor-pointer' onClick={() => { router.push('/shop/cumpleanos') }}>
          Art. feliz cumpleaños
        </li>
      </ul>
    </>
  )
}

export default ListCategory
