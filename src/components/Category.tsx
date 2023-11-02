import Link from 'next/link'
import Image from 'next/image'
import Globos from '@/../public/image/globos.webp'
import HBirthday from '@/../public/image/art-feliz-cumpleanos.webp'
import reposteria from '@/../public/image/reposteria.webp'
import descartables from '@/../public/image/descartable.webp'
import { CATEGORY } from '@/static/category'

function Category () {
  return (
    <section className='mx-[--width-page] text-center'>
      <h2 className='text-4xl font-bold my-5 dark:text-white'>Categorias</h2>
      <div className='grid grid-cols-res gap-5 lg:grid-cols-4'>
        <div>
          <Link href={`/shop/${CATEGORY.GLOBOS}`}>
            <Image
              className='rounded-2xl'
              src={Globos}
              alt="Categoria globos"
              placeholder="blur"
            />
          </Link>
          <h3 className='text-xl font-bold my-0 mt-5'>Globos</h3>
        </div>
        <div>
          <Link href={`/shop/${CATEGORY.ART_FELIZ_CUMPLEANOS}`}>
            <Image
              className='rounded-2xl'
              src={HBirthday}
              alt="Categoria art.feliz cumpleanos"
              placeholder="blur"
            />
          </Link>
          <h3 className='text-xl font-bold my-0 mt-5'>Art - Feliz Cumpleaños</h3>
        </div>
        <div>
          <Link href={`/shop/${CATEGORY.REPOSTERIA}`}>
            <Image
              className='rounded-2xl'
              src={reposteria}
              alt="Categoria reposteria"
              placeholder="blur"
            />
          </Link>
          <h3 className='text-xl font-bold my-0 mt-5'>Reposteria</h3>
        </div>
        <div>
          <Link href={`/shop/${CATEGORY.DESCARTABLES}`}>
            <Image
              className='rounded-2xl'
              src={descartables}
              alt="Categoria descartables"
              placeholder="blur"
            />
          </Link>
          <h3 className='text-xl font-bold my-0 mt-5'>Descartables</h3>
        </div>
      </div>
    </section>
  )
}
export default Category
