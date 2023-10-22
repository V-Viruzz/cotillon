'use client'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useState } from 'react'
import ArrowIcon from './icons/ArrowIcon'

interface Props {
  data: any
  initialPage: number
}

function NavPage ({ data, initialPage = 0 }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const nameProduct = searchParams.get('name')
  const urlName = nameProduct !== null ? `&name=${nameProduct}` : ''
  const [page, setPage] = useState(initialPage)

  return (
    <div className='flex justify-center mt-10'>
      <button
        className='px-4 py-2 dark:bg-[#111720] bg-zinc-100  rounded-xl'
        onClick={() => {
          const num = page - 1
          if (num <= 0) return
          setPage(num)
          router.push(`${pathname}?page=${num}${urlName}`)
        }}
      >
        <ArrowIcon />
      </button>
      <div className='px-4 py-2'>
        {page}
      </div>
      <button
        className='px-4 py-2 dark:bg-[#111720] bg-zinc-100 rounded-xl'
        onClick={() => {
          const num = page + 1
          if (data.length === 0) return
          setPage(num)
          router.push(`${pathname}?page=${num}${urlName}`)
        }}
      >
        <ArrowIcon transform="scale(-1 1)" />
      </button>
    </div>
  )
}

export default NavPage
