import SearchIcon from '@/components/icons/SearchIcon'
import { useMenuContext } from '@/context/NavMenuContext'
import { type FormEvent } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
  searchRef: any
  isHidden: boolean
  setHidden: (value: boolean) => any
}

function SearchBar ({ searchRef, isHidden, setHidden }: Props) {
  const { isMenuHidden, setMenuHidden } = useMenuContext()
  const router = useRouter()

  const handleBlur = () => {
    // if (searchRef.current.value === '') return

    setTimeout(() => {
      setHidden(true)
    }, 200)
  }

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
    setMenuHidden(!isMenuHidden)
    const value = searchRef.current.value
    router.push(`/shop?page=1&name=${value}`)
  }

  return (
    <section className={`${isHidden ? 'hidden' : 'grid'} absolute md:static h-full w-full bg-[var(--background-start-rgb)]  place-content-center grid-cols-1`}>
      <form
        className="focus-within:shadow-search focus-within:border-transparent ease-in-out transition-all duration-300 rounded-3xl border dark:border-[#ffffff2a] border-[#0000002a] dark:text-white"
        onSubmit={handleSubmit}
        onBlur={handleBlur}
      >
        <div
          className='flex'
        >
          <input
            ref={searchRef}
            className="w-full rounded-l-3xl p-3 px-4 mr-0 0 outline-none bg-[var(--background-start-rgb)]" placeholder="Buscar"
          />
          <button className="rounded-r-3xl p-3 text-[var(--foreground-rgb)] uppercase" type='submit' >
            <SearchIcon width={22} height={22} />
          </button>
        </div>
      </form>
    </section>
  )
}

export default SearchBar
