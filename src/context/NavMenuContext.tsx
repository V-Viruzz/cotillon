import { createContext, useContext, useState } from 'react'

interface ContextProps {
  isMenuHidden: boolean
  setMenuHidden: (bol: any) => void
}

export const MenuContext = createContext<ContextProps>({} as any)

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const MenuProvider: React.FC<Props> = ({ children }) => {
  const [isMenuHidden, setMenuHidden] = useState(true)
  return (
    <MenuContext.Provider value={{
      isMenuHidden,
      setMenuHidden
    }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export const useMenuContext = (): ContextProps => useContext(MenuContext)
