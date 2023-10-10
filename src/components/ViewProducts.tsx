import React from 'react'
import Product from '@/components/Product'

interface Props {
  data: any
  category: string
}

function ViewProducts ({ data, category }: Props) {
  return (
    <>
      <h3 className="text-2xl font-bold mb-2">
        {category}
      </h3>
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
  )
}

export default ViewProducts
