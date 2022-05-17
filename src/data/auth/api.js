import { get } from "common/request"

export const authRequest = {
  user: () => get("auth/info/"),
}
