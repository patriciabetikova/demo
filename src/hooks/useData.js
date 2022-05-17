import * as R from "ramda"
import React from "react"

export const useData = (
  req,
  { refetchParams = [], skip = R.always(false), clearOnParamChange } = {},
) => {
  const [data, setData] = React.useState(undefined)
  const request = () => req().then((res) => setData(res))

  React.useEffect(() => {
    if (clearOnParamChange) {
      setData(undefined)
    }

    if (!skip()) {
      request()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refetchParams)

  return [data, request]
}
