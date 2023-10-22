import ViewProducts from '@/components/ViewProducts'
import { POPULAR_PRODUCTS } from '@/static/popular-protucts'

const { NEXT_PUBLIC_DOMAIN } = process.env

async function loadPost () {
  const res = await fetch(`${NEXT_PUBLIC_DOMAIN}/api/products`)
  const data = await res.json()
  return data
}

async function page () {
  const data = await loadPost()
  const arrayPopularProducts = POPULAR_PRODUCTS.map(item => item.id)
  const ProductsFilter = data.filter((product: any) => {
    return arrayPopularProducts.includes(product.id)
  })

  return (
    <section className="mx-[--width-page] grid grid-cols-1 mt-10">
      <h2 className='text-4xl font-bold my-5 text-center dark:text-white'>
        Protuctos
        <p className='text-xl text-[#49b5f6]'>Populares</p>
      </h2>
      <ViewProducts
        data={ProductsFilter}
      />
    </section>
  )
}

export default page
