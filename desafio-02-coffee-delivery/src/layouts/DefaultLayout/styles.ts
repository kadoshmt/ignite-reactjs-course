import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`

// < 1120 width => padding no topo
