import Loading from '@/components/Loading'
import { Suspense } from 'react'

function page ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </>
  )
}

export default page
