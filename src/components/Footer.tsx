import Logo from '@/../public/image/logo-s.webp'
import Image from 'next/image'
import WhatsAppIcon from './icons/WhatsAppIcon'
import FacebookIcon from './icons/FacebookIcon'

function Footer () {
  return (
    <footer className="bg-zinc-100 dark:bg-[#111720] mt-24">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">

            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <div>
                <Image
                  src={Logo}
                  alt='Logo'
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">Redes</p>

            <div className="flex items-start gap-2 mt-5">

              <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-inherit hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                <FacebookIcon width={28} height={28} />
              </a>
              <a href="https://wa.link/wg9sol" className="text-gray-600 transition-colors duration-300 dark:text-inherit hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                <WhatsAppIcon width={28} height={28} />
              </a>

            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">Contacto y local</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="text-gray-600 transition-colors duration-300 dark:text-inherit dark:hover:text-blue-400 hover:underline hover:text-blue-500"> Retiro villa 31 - machu picchu 2656</p>
              <p className="text-gray-600 transition-colors duration-300 dark:text-inherit dark:hover:text-blue-400 hover:underline hover:text-blue-500">+ 54 9 116931-7668</p>

            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
