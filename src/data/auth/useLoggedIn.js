import { useEffect, useState } from "react"
import { loggedIn$ } from "data/auth/rx"
import { getTokens } from "./storage"

export const useLoggedIn = () => {
  const [tokens, setTokens] = useState(getTokens())
  useEffect(() => {
    loggedIn$.subscribe(setTokens)
  }, [])
  console.log("tok", tokens)
  return !!tokens?.accessToken
}
