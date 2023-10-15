import React from 'react'
import Product from '@/components/Product'

interface Props {
  data: any
  category?: string
}

function ViewProducts ({ data, category }: Props) {
  return (
    <>
      {
        data.length !== 0
          ? <>
            {
            category !== undefined
              ? <h3 className="text-2xl font-bold mb-2">
              {category}
            </h3>
              : null
            }

            <ul className="grid grid-cols-res gap-8">
              {
                data.map((item: any) => {
                  return (
                    <Product
                      key={item.id}
                      id={item.id}
                      image={item.image}
                      name={item.name}
                      price={item.price}
                    />
                  )
                })
              }
            </ul>
          </>
          : <div className='grid place-content-center md:h-[70%]'>
            <p className='text-2xl my-5'>No se encuentra productos</p>
          </div>
      }
    </>
  )
}

export default ViewProducts
