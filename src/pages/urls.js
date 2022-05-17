import { HomePage } from "pages/HomePage"
import { LoginPage } from "pages/LoginPage"

export const types = {
  loggedOut: "loggedOut",
  loggedIn: "loggedIn",
  default: "default",
}

export const urls = {
  home: { component: HomePage, path: "/", url: "/", type: types.loggedIn },
  login: {
    component: LoginPage,
    path: "/login",
    url: "/login",
    type: types.loggedOut,
  },
}
