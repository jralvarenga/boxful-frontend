
"use server"

import { cookies } from "next/headers"


export async function setCookie(name: string, value: string, options?: { path?: string; maxAge?: number }) {
    const store = await cookies()
    store.set({
    name,
    value,
    path: options?.path ?? "/",
    maxAge: options?.maxAge,
  })
}


export async function getCookie(name: string): Promise<string | undefined> {
    const store = await cookies()
  const cookie = store.get(name)
  return cookie?.value
}
