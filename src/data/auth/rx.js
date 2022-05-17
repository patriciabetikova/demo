import { Subject } from "rxjs"
import { authRequest } from "./api"
import {
  getTokens,
  setAccessToken,
  setRefreshToken,
  clearTokens,
} from "./storage"

export const loggedIn$ = new Subject(getTokens())

export const login = (accessToken, refreshToken) => {
  setAccessToken(accessToken)
  setRefreshToken(refreshToken)

  loggedIn$.next({ accessToken, refreshToken })
}

export const logout = () => {
  const tokens = getTokens()

  if (tokens.accessToken || tokens.refreshToken) {
    authRequest.logout()
  }

  clearTokens()
  loggedIn$.next({ accessToken: undefined, refreshToken: undefined })
}
