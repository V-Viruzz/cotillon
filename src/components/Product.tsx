'use client'
import { useState } from 'react'
import Image from 'next/image'

interface Props {
  id: number
  image: string
  name: string
  price: number
  description: string
}

function Product ({ id, image, name, price, description }: Props) {
  const [isLoiding, setIsLoiding] = useState(true)

  return (
    <li className="rounded-xl" key={id}>

      <div className='overflow-hidden rounded-xl relative group'>
        <Image
          className={
            `w-full rounded-t-xl dark:rounded-xl duration-700 ease-in-out object-cover z-0  
          ${isLoiding ? 'grayscale blur-2xl scale-110' : 'grayscale-0 blur-0 scale-100'} `
          }
          src={image ?? 'https://wnoztglxnuskuorwudzj.supabase.co/storage/v1/object/public/products/icon-image-not-found-free-vector.jpg?t=2023-10-07T18%3A34%3A53.576Z'}
          alt={`Producto ${name}`}
          width={400}
          height={400}
          onLoadingComplete={() => { setIsLoiding(false) }}

        />
        <div className='absolute w-full h-full top-0 ease-in-out duration-200 text-white bg-black opacity-0 group-hover:opacity-30 text-lg flex items-end p-5'>
          <div className='opacity-0 group-hover:opacity-100 ease-in-out duration-00'>
          {description}
          </div>
        </div>
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
