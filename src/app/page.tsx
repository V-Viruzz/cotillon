import Image from 'next/image'
import Logo from '@/assets/logo-page.png'
import Category from '@/components/Category'

export default function Home () {
  return (
    <main className="min-h-screen pt-[var(--header-height)]">
      <div className='flex justify-center overflow-hidden'>
        <Image
          className='max-w-[230%] sm:max-w-[210%] md:max-w-[170%] lg:max-w-[130%] xl:max-w-[100%] transition-all'
          src={Logo}
          alt="Picture of the author"
        />
      </div>
      <Category />
    </main>
  )
}
