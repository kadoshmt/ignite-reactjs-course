import { Drink, data } from '../../../../mock'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListContainer, CoffeeListItems } from './styles'

export function CoffeeList() {
  const coffees: Drink[] = data
  return (
    <>
      <CoffeeListContainer>
        <h2>Nossos Cafés</h2>
        <CoffeeListItems>
          {coffees.map((coffee: Drink) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />
          })}
        </CoffeeListItems>
      </CoffeeListContainer>
    </>
  )
}
