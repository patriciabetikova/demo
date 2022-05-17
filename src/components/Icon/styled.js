import styled, { css } from "styled-components/macro"
import { theme } from "theme"

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  color: ${theme.color.darkgrey};
  flex-shrink: 0;
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
  ${p =>
    p.darken &&
    css`
      background: rgba(0, 0, 0, 0.05);
    `}
  ${p =>
    p.grey &&
    css`
      color: ${theme.color.grey};
    `}
  ${p =>
    p.primaryFill &&
    css`
      color: ${theme.color.primary};
      fill: ${theme.color.primary};
    `}
  ${p =>
    p.error &&
    css`
      background: ${theme.color.error};
      color: ${theme.color.white};
    `}
  ${p =>
    p.large &&
    css`
      width: 5rem;
      height: 5rem;
      svg {
        width: 3.5rem;
        height: 3.5rem;
      }
    `}
  ${p =>
    p.small &&
    css`
      width: 2.5rem;
      height: 2.5rem;
      svg {
        width: 2rem;
        height: 2rem;
      }
    `}
  ${p =>
    p.autoHeight &&
    css`
      height: auto;
    `};
  ${p =>
    p.round &&
    css`
      border-radius: 50%;
    `};
  ${p =>
    p.rotate &&
    css`
      transform: rotate(180deg);
    `};
  ${p =>
    p.onClick &&
    css`
      cursor: pointer;
    `};
`
