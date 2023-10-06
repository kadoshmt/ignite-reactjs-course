import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  width: 70rem;
  margin-top: 2rem;

  h2 {
    font-size: 2rem;
    line-height: 130%;
    font-weight: bolder;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 2rem;
  }
`

export const CoffeeListItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
`
