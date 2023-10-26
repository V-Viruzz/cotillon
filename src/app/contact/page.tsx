import FacebookIcon from '@/components/icons/FacebookIcon'
import WhatsAppIcon from '@/components/icons/WhatsAppIcon'
import React from 'react'

function page () {
  return (
    <main className="grid place-content-center min-h-screen mx-[--width-page] pt-[var(--header-height)] md:pt-[calc(var(--header-height)+2rem)] ">
      <div className='grid grid-cols-1 grid-rows-[auto_auto] gap-4'>
        <div className='text-center'>
          <h2 className='text-3xl'>Contacto</h2>
        </div>
        <div className='grid gap-3  w-[14rem]'>
          <a href="#" className="flex gap-3 justify-between text-gray-600 transition-colors duration-300 dark:text-inherit hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
            <p>Cotillon sinka</p>
            <FacebookIcon width={28} height={28} />
          </a>
          <a href="https://wa.link/wg9sol" className="flex gap-3 justify-between text-gray-600 transition-colors duration-300 dark:text-inherit hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
            <p>+54 9 116931-7668</p>
            <WhatsAppIcon width={28} height={28} />
          </a>
        </div>
        <div className='grid gap-3'>
          <h3 className='text-xl text-center '>Local</h3>
          <p>Retiro villa 31 - machu picchu 2656</p>
        </div>
      </div>
    </main>
  )
}

export default page
