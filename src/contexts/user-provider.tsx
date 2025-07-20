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

interface TokenContextType {
  token: string | null
  user: User | null
}

const UserContext = createContext<TokenContextType | undefined>(undefined)

export function UserProvider({
  children,
  token,
}: {
  children: ReactNode
  token: string
}) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (token) {
      setUser(jwtDecode(token))
    } else {
      setUser(null)
    }
  }, [token])

  return (
    <UserContext.Provider value={{ token, user }}>
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
