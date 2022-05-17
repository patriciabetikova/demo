import styled from "styled-components/macro"
import { theme } from "theme"

export const StyledBackground = styled.div`
  background: ${theme.color.lightgrey};
  margin: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${theme.color.primary};
  svg {
    width: 3rem;
    height: 3rem;
    color: ${theme.color.primary};
  }
`

export const StyledErrorMessage = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  margin: 0.6rem 0;
  &:first-of-type {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`
