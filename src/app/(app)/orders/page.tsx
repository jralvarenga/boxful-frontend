import { getOrders } from "@/actions/api"
import { OrdersTable } from "@/components/orders-table"

export default async function OrdersPage() {
  const orders = await getOrders()

  return <OrdersTable orders={orders || []} />
}
