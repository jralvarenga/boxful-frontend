import { getOrder } from "@/actions/api"
import { ProductsOnOrder } from "@/components/products-on-order"

export default async function ProductsPage({
  params,
}: {
  params: { id: string }
}) {
  const store = await params
  const order = await getOrder(store.id)

  return <ProductsOnOrder products={order?.Product || []} />
}
