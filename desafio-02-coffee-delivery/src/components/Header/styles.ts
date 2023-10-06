import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  height: 104px;
  gap: 0.75rem;
  width: 70rem;
`
export const LogoContainer = styled.div`
  display: flex;
  flex: 1;
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme.purple};
  border-radius: 6px;
  gap: 0.25rem;
`

export const CartContainer = styled.nav`
  display: flex;

  a {
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
    text-decoration: none;
    padding: 8px;
    height: 38px;
    border-radius: 6px;
    position: relative;
    transition: 0.3s;

    &:hover {
      background: ${(props) => props.theme.yellow};
      color: ${(props) => props.theme.white};
    }
  }
`

export const CartCounter = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  bottom: 2.5rem;
  left: 1.25rem;
  position: relative;
  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  border-radius: 50%;
  text-align: center;
  font-size: 0.75rem;
  font-weight: bold;
  width: 19px;
  height: 19px;
`
