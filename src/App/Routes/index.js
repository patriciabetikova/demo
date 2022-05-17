import React from "react"
import { Routes as ReactRoutes, Route, BrowserRouter } from "react-router-dom"
import { urls } from "pages/urls"
import * as R from "ramda"
import { GuardRoute } from "./GuardRoute"

export const Routes = ({ loggedIn, user }) => (
  <BrowserRouter>
    <ReactRoutes>
      {R.values(urls).map((x) => (
        <Route
          element={
            <GuardRoute type={x.type}>
              <x.component />
            </GuardRoute>
          }
          path={x.path}
          key={x.path}
        />
      ))}
    </ReactRoutes>
  </BrowserRouter>
)
