import Link from 'next/link'
import Image from 'next/image'
import Globos from '@/assets/globos.jpg'
import HBirthday from '@/assets/feliz-cumpleanos.jpg'
import reposteria from '@/assets/reposteria.jpg'
import descartables from '@/assets/descartable.jpg'

function Category () {
  return (
    <section className='mx-[--width-page] text-center'>
      <h2 className='text-4xl font-bold my-5'>Categorias</h2>

      <div className='grid grid-cols-res gap-5 lg:grid-cols-res4x4 xl:grid-cols-res'>
        <div>
          <Link href="/shop/globos">
            <Image
              className='rounded-2xl'
              src={Globos}
              alt="Picture of the author"
            />
          </Link>
          <h3 className='text-xl font-bold my-0 mt-5'>Globos</h3>
        </div>
        <div>
          <Link href="/shop/cumpleanos">
            <Image
              className='rounded-2xl'
              src={HBirthday}
              alt="Picture of the author"
            />
          </Link>
          <h3 className='text-xl font-bold my-0 mt-5'>Art - Feliz Cumpleaños</h3>
        </div>
        <div>
          <Link href="/shop/reposteria">
            <Image
              className='rounded-2xl'
              src={reposteria}
              alt="Picture of the author"
            />
          </Link>
          <h3 className='text-xl font-bold my-0 mt-5'>Reposteria</h3>
        </div>
        <div>
          <Link href="/shop/descartable">
            <Image
              className='rounded-2xl'
              src={descartables}
              alt="Picture of the author"
            />
          </Link>
          <h3 className='text-xl font-bold my-0 mt-5'>Descartables</h3>
        </div>
      </div>
    </section>
  )
}

export default Category
