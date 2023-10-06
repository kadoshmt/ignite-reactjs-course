import styled from 'styled-components'

export const OrderSummaryContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 28rem;
  gap: 0.75rem;
`

export const SummaryTitle = styled.h2`
  font-size: 1.12rem;
  line-height: 130%;
  font-weight: bold;
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme['base-title']};
`
export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 28rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`
export const CoffeeCard = styled.div`
  width: 23rem;
  padding: 0.5rem 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 1.5rem 0;

  &:first-child {
    margin-top: 0;
  }
`

export const Line = styled.hr`
  border: 0;
  border-top: 1px solid ${(props) => props.theme['base-button']};
  width: 100%;
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.25rem;
`
export const Price = styled.div`
  font-weight: bold;
  text-align: right;
  color: ${(props) => props.theme['base-title']};
`
export const Coffee = styled.img`
  width: 64px;
`
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const CoffeeTitle = styled.p`
  text-align: left;
  width: 100%;
  line-height: 130%;
`
export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
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

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.75rem;
  text-transform: uppercase;
  transition: 0.3s;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const PriceWraper = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`

export const PriceLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  font-size: 0.85rem;
  p + p {
    text-align: left;
    font-size: 1rem;
  }
`
export const TotalPriceLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  p {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }
  p + p {
    text-align: left;
  }
`

export const ConfirmButton = styled.button`
  width: 100%;
  font-size: 14px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};
  text-transform: uppercase;
  border: 0;
  border-radius: 6px;
  padding: 0.75rem 0.5rem;
  cursor: pointer;
  transition: 0.3s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
