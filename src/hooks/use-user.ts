import { useTokenContext } from "@/contexts/user-provider"

export function useUser() {
  return useTokenContext()
} 