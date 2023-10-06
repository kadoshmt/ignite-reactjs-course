import { useContext, useState } from 'react'
import { Drink } from '../../../../mock'
import {
  ButtonGroup,
  BuyButton,
  BuyContainer,
  CoffeeCardContainer,
  CoffeeDescription,
  CoffeeImage,
  CoffeeLabel,
  CoffeeLabelList,
  CoffeePrice,
  CoffeeTitle,
  CounterButton,
  CounterContainer,
  CounterValue,
} from './styles'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { CartContext } from '../../../../contexts/CartContext'

interface DrinkProps {
  coffee: Drink
}

export function CoffeeCard({ coffee }: DrinkProps) {
  const { addItemToCart, getItemAmount } = useContext(CartContext)
  const [amount, setAmount] = useState(getItemAmount(coffee.id))

  function handleIncreaseAmount() {
    if (amount >= 9) return
    setAmount((state) => state + 1)
  }

  function handleDecreaseAmount() {
    if (amount === 0) return
    setAmount((state) => state - 1)
  }

  function handleAddToCart() {
    if (amount === 0) return
    addItemToCart({
      id: coffee.id,
      title: coffee.title,
      imageUrl: coffee.imageUrl,
      price: coffee.price,
      amount,
    })
  }

  function formattedPrice(price: number) {
    return price.toString().replace('.', ',')
  }
  return (
    <CoffeeCardContainer>
      <CoffeeImage src={coffee.imageUrl} alt={coffee.title} />
      <CoffeeLabelList>
        {coffee.tags.map((tag) => {
          return <CoffeeLabel key={tag}>{tag}</CoffeeLabel>
        })}
      </CoffeeLabelList>
      <CoffeeTitle>{coffee.title}</CoffeeTitle>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>
      <BuyContainer>
        <CoffeePrice>
          <span>R$</span>
          {formattedPrice(coffee.price)}
        </CoffeePrice>
        <ButtonGroup>
          <CounterContainer>
            <CounterButton onClick={handleDecreaseAmount}>
              <Minus size={16} />
            </CounterButton>
            <CounterValue>{amount}</CounterValue>
            <CounterButton onClick={handleIncreaseAmount}>
              <Plus size={16} />
            </CounterButton>
          </CounterContainer>
          <BuyButton onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </BuyButton>
        </ButtonGroup>
      </BuyContainer>
    </CoffeeCardContainer>
  )
}
