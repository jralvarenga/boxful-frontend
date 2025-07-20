'use server'

import { Order } from "boxful-types"
import { getCookie } from "./cookies"
import { revalidateTag } from "next/cache"

export async function getOrders(): Promise<Order[]> {
  const token = await getCookie('token')

  if (!token) {
    return []
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
    method: "GET",
    headers: {
      "content-type": "application/json; charset=utf-8",
      'authorization': `Bearer ${token}`
    },
    next: {
      tags: ['get_orders']
    }
  })
  const data = await res.json() as Order[]

  return data
}

export async function createOrder(body: Order) {
  const token = await getCookie('token')

  if (!token) {
    return null
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
    method: "GET",
    headers: {
      "content-type": "application/json; charset=utf-8",
      'authorization': `Bearer ${token}`
    },
    body: JSON.stringify(body),
  })
  const data = await res.json() as Order

  return data
}

export async function getOrder(id: string): Promise<Order | null> {
  const token = await getCookie('token')

  if (!token) {
    return null
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json; charset=utf-8",
      'authorization': `Bearer ${token}`
    },
    next: {
      tags: [`get_order_${id}`]
    }
  })
  const data = await res.json() as Order

  return data
}

export async function revalidateDataWithTag(id: string) {
  revalidateTag(id);
}