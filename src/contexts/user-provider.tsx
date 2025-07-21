"use client"

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react"
import { jwtDecode } from "jwt-decode"
import { User } from "boxful-types"
import { useRouter } from "next/navigation"
import { deleteCookie } from "@/actions/cookies"

interface TokenContextType {
  token: string | null
  user: User | null
  logout: () => void
}

const UserContext = createContext<TokenContextType | undefined>(undefined)

export function UserProvider({
  children,
  token,
}: {
  children: ReactNode
  token: string
}) {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (token) {
      setUser(jwtDecode(token))
    } else {
      setUser(null)
    }
  }, [token])

  async function logout() {
    await deleteCookie("token")
    router.push("/login")
  }

  return (
    <UserContext.Provider value={{ token, user, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export function useTokenContext() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useTokenContext must be used within a TokenProvider")
  }
  return context
}
