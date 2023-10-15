import { NextResponse, type NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const { NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env

export async function GET (req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url ?? '')
  const category = searchParams.get('category')
  const nameProduct = searchParams.get('name')
  const page = Number(searchParams.get('page'))
  const limit = 4

  const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL ?? '', SUPABASE_SERVICE_ROLE_KEY ?? '')

  if (category !== null) {
    const { data: products } = await supabase
      .from('products')
      .select()
      .eq('category', category)
      .range((page - 1) * limit, page * limit - 1)

    return NextResponse.json(products)
  } else if (nameProduct !== null) {
    const { data: products } = await supabase
      .from('products')
      .select()
      .ilike('name', `%${nameProduct}%`)
      .range((page - 1) * limit, page * limit - 1)

    return NextResponse.json(products)
  } else if (page !== 0) {
    const { data: products } = await supabase
      .from('products')
      .select()
      .range((page - 1) * limit, page * limit - 1)

    return NextResponse.json(products)
  }

  const { data: products } = await supabase
    .from('products')
    .select()
    .range(0, 99)

  return NextResponse.json(products)
}
