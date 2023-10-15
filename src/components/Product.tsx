'use client'
import { useState } from 'react'
import Image from 'next/image'

interface Props {
  id: number
  image: string
  name: string
  price: number
}

function Product ({ id, image, name, price }: Props) {
  const [isLoiding, setIsLoiding] = useState(true)

  return (
    <li className="rounded-xl" key={id}>

      <div className='overflow-hidden rounded-xl'>
        <Image
          className={
            `w-full rounded-t-xl dark:rounded-xl group-hover:opacity-75 duration-700 ease-in-out object-cover z-0
          ${isLoiding ? 'grayscale blur-2xl scale-110' : 'grayscale-0 blur-0 scale-100'} `
          }
          src={image ?? 'https://wnoztglxnuskuorwudzj.supabase.co/storage/v1/object/public/products/icon-image-not-found-free-vector.jpg?t=2023-10-07T18%3A34%3A53.576Z'}
          alt="Nombre del producto"
          width={400}
          height={400}
          onLoadingComplete={() => { setIsLoiding(false) }}
        />
      </div>

      <div className='p-3 text-xl'>
        <h4 className=''>
          {name}
        </h4>
        <p className="font-bold text-[#49b5f6]">
          $ {price}
        </p>
      </div>
    </li>
  )
}

export default Product
