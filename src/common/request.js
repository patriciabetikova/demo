import axios from "axios"
import { config } from "config"
import { logout } from "data/auth/rx"
import { getTokens, setAccessToken } from "data/auth/storage"

let refreshRequest

const request =
  (method) =>
  (url, data, cfg = {}) => {
    return new Promise((resolve, reject) => {
      const tokens = getTokens()

      return axios({
        method,
        url: config.apiRoot + url,
        data,
        headers: {
          "Content-Type": `${
            cfg.form ? "multipart/form-data" : "application/json"
          }`,
          ...(tokens
            ? cfg?.noAuth
              ? {}
              : { Authorization: `Bearer ${tokens.accessToken}` }
            : {}),
        },
      })
        .then((x) => {
          resolve(x.data)
        })
        .catch((error) => {
          if (error.response.status === 401) {
            if (!refreshRequest) {
              refreshRequest = axios({
                method: "post",
                url: config.apiRoot + "auth/token/refresh/",
                data: { refresh: tokens.refreshToken },
                headers: {
                  "Content-Type": "application/json",
                },
              })
            }

            return refreshRequest
              .then((response) => {
                setAccessToken(response.data.access)
                return axios({
                  method,
                  url: config.apiRoot + url,
                  data,
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${response.data.access}`,
                  },
                })
                  .then((x) => {
                    refreshRequest = null
                    resolve(x.data)
                  })
                  .catch((x) => {
                    refreshRequest = null
                    reject(x)
                  })
              })
              .catch((err) => {
                logout()
                refreshRequest = null
                resolve()
              })
          }
          reject(error)
        })
    })
  }

export const get = request("get")

export const post = request("post")

export const del = request("delete")

export const put = request("put")

export const patch = request("patch")
