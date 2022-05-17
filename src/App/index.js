import { ErrorBoundary } from "components/ErrorBoundary"
import { authRequest } from "data/auth/api"
import { useLoggedIn } from "data/auth/useLoggedIn"
import { useData } from "hooks/useData"
import { GlobalStyle } from "./GlobalStyle"
import { Routes } from "./Routes"

export const App = () => {
  const loggedIn = useLoggedIn()
  const [user] = useData(() => authRequest.user(), {
    refetchParams: [loggedIn],
    clearOnParamChange: true,
    skip: () => !loggedIn,
  })
  console.log("app")
  return (
    <>
      <GlobalStyle />
      <ErrorBoundary>
        <Routes loggedIn={loggedIn} user={user} />
      </ErrorBoundary>
    </>
  )
}
