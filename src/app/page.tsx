import Image from 'next/image'
import Logo from '@/../public/image/logo-page.webp'
import Category from '@/components/Category'
import PopularProducts from '@/components/PopularProducts'

export default function Home () {
  return (
    <main className="min-h-screen pt-[var(--header-height)]">
      <div className='flex justify-center overflow-hidden'>
        <Image
          className='max-w-[230%] sm:max-w-[210%] md:max-w-[170%] lg:max-w-[130%] xl:max-w-[100%] transition-all'
          width={2320}
          height={1080}
          quality={100}
          priority={true}
          src={Logo}
          alt="logo page"
        />
      </div>
      <Category />
      <PopularProducts />
    </main>
  )
}
