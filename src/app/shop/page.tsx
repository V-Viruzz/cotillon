import NavPage from '@/components/NavPage'
import ViewProducts from '@/components/ViewProducts'
import { redirect } from 'next/navigation'

const { NEXT_PUBLIC_DOMAIN } = process.env

async function loadPost (name = '', page = '') {
  const searchParamsName = name !== '' ? `&name=${name}` : ''
  const searchParamsPage = page !== '' ? `?page=${page}` : ''
  const res = await fetch(`${NEXT_PUBLIC_DOMAIN}/api/products${searchParamsPage}${searchParamsName}`)
  const data = await res.json()
  console.log('🚀 ~ file: page.tsx:12 ~ loadPost ~ data:', data)

  return data
}

interface Props {
  searchParams: {
    name: string
    page: string
  }
}

async function page ({ searchParams }: Props) {
  const { name, page } = searchParams
  if (page === undefined) return redirect('/shop?page=1')
  const data = await loadPost(name, page)

  return (
    <section>
      <ViewProducts
        category="Products"
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
