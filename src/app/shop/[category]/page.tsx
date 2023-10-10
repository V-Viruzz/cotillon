import React from 'react'
import ViewProducts from '@/components/ViewProducts'

async function loadPost (params: any) {
  const res = await fetch(`http://localhost:3000/api/products?category=${params}`)
  const data = await res.json()
  return data
}

async function page ({ params }: { params: any }) {
  const data = await loadPost(params.category)
  return (
    <section>
      <ViewProducts
        category={params.category}
        data={data}
      />
    </section>
  )
}

export default page
