import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 100vw;
  margin: auto;
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding-bottom: 14.625rem;
`
