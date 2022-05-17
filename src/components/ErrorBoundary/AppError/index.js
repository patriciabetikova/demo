import React from "react"
import { StyledBackground, StyledErrorMessage } from "./styled"
import { Alert } from "assets/icons/Alert"
import { Icon } from "components/Icon"

export const AppError = () => (
  <StyledBackground>
    <Icon icon={Alert} large />
    <StyledErrorMessage>OOPS</StyledErrorMessage>
    <StyledErrorMessage>Something went wrong</StyledErrorMessage>
    <StyledErrorMessage>Try loading the page again</StyledErrorMessage>
  </StyledBackground>
)
