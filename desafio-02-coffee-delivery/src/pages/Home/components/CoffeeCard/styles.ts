import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  width: 256px;
  height: 310px;
  padding: 1.25rem;
  margin-top: 1.25rem;
  background: ${(props) => props.theme['base-card']};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
`

export const CoffeeTitle = styled.h3`
  font-size: 1.25rem;
  line-height: 130%;
  font-weight: bolder;
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme['base-title']};
`
export const CoffeeImage = styled.img`
  width: 120px;
  margin-top: -2.5rem;
`

export const CoffeeLabelList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin: 1rem 0;
`

export const CoffeeLabel = styled.small`
  display: inline-block;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 0 0.5rem;
  border-radius: 100px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
  line-height: 1.3rem;
`
export const CoffeeDescription = styled.p`
  margin-top: 0.5rem;
  color: ${(props) => props.theme['base-label']};
  font-size: 0.9rem;
  letter-spacing: -0.2px;
`

export const BuyContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.06rem;
`

export const CoffeePrice = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  line-height: 190%;
  font-weight: bolder;
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme['base-title']};

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.85rem;
    margin-right: 4px;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`

export const CounterContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  gap: 0.25rem;
`
export const CounterButton = styled.button`
  color: ${(props) => props.theme.purple};
  background: transparent;
  border: 0;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
export const CounterValue = styled.p`
  color: ${(props) => props.theme['base-title']};
  width: 20px;
  text-align: center;
`

export const BuyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['purple-dark']};
  border: 0;
  text-decoration: none;
  padding: 8px;
  height: 38px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
