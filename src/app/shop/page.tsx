import NavPage from '@/components/NavPage'
import ViewProducts from '@/components/ViewProducts'
import { redirect } from 'next/navigation'

export const revalidate = 3600
const { NEXT_PUBLIC_DOMAIN } = process.env

async function getProducts (name = '', page = '') {
  try {
    const searchParamsName = name !== '' ? `&name=${name}` : ''
    const searchParamsPage = page !== '' ? `?page=${page}` : ''
    const url = `${NEXT_PUBLIC_DOMAIN}/api/products${searchParamsPage}${searchParamsName}`
    const res = await fetch(url)
    const data = await res.json()

    return data
  } catch (err) {
    console.log(err)
  }
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
  const data = await getProducts(name, page)

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
