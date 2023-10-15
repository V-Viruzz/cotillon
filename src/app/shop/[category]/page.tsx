import React from 'react'
import ViewProducts from '@/components/ViewProducts'
import NavPage from '@/components/NavPage'
import { redirect } from 'next/navigation'

const { NEXT_PUBLIC_DOMAIN } = process.env

async function loadPost (params: any, page = '') {
  const searchParamsPage = page !== '' ? `&page=${page}` : ''
  const res = await fetch(`${NEXT_PUBLIC_DOMAIN}/api/products?category=${params}${searchParamsPage}`)
  const data = await res.json()
  return data
}

interface Props {
  params: {
    category: string
  }
  searchParams: {
    page: string
  }
}

async function page ({ params, searchParams }: Props) {
  const { page } = searchParams
  const { category } = params
  if (page === undefined) return redirect(`/shop/${category}?page=1`)
  const data = await loadPost(category, page)

  return (
    <section>
      <ViewProducts
        category={category}
        data={data}
      />
      <NavPage
        data={data}
        initialPage={Number(page)}
      />
    </section>
  )
}

export default page
