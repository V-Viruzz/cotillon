import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const { NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env

interface NextApiRequestWithParams extends NextApiResponse {
  params: {
    id: string
  }
}

export async function GET (req: NextApiRequest, res: NextApiRequestWithParams) {
  const { id } = res.params

  const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL ?? '', SUPABASE_SERVICE_ROLE_KEY ?? '')

  const { data: products } = await supabase
    .from('products')
    .select()
    .eq('id', id)
    .range(0, 99)

  return NextResponse.json(products)
}
