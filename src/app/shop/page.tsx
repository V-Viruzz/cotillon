import React from 'react'
import ViewProducts from '@/components/ViewProducts'

const { NEXT_PUBLIC_DOMAIN } = process.env

async function loadPost (name: string = '') {
  const searchParams = name !== '' ? `?name=${name}` : ''
  const res = await fetch(`${NEXT_PUBLIC_DOMAIN}/api/products${searchParams}`)
  const data = await res.json()
  return data
}

interface Props {
  searchParams: {
    name: string
  }
}

async function page ({ searchParams }: Props) {
  const data = await loadPost(searchParams.name)

  return (
    <section>
      <ViewProducts
        category="Products"
        data={data}
      />
    </section>
  )
}

export default page
