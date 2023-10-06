import { useContext } from 'react'
import {
  Actions,
  Coffee,
  CoffeeCard,
  CoffeeTitle,
  Details,
  Line,
  Info,
  OrderSummaryContainer,
  Price,
  SummaryContainer,
  SummaryTitle,
  PriceWraper,
  PriceLine,
  TotalPriceLine,
  ConfirmButton,
  CounterContainer,
  CounterValue,
  CounterButton,
  RemoveButton,
} from './styles'
import { CartContext } from '../../../../contexts/CartContext'
import { Minus, Plus, Trash } from 'phosphor-react'

export function OrderSummary() {
  const {
    cartItems,
    deliveryTax,
    totalPrice,
    itemsPrice,
    increaseItemCart,
    decreaseItemCart,
    removeItemOfCart,
  } = useContext(CartContext)

  function formattedPrice(price: number) {
    return price.toFixed(2).toString().replace('.', ',')
  }

  return (
    <OrderSummaryContainer>
      <SummaryTitle>Cafés Selecionados</SummaryTitle>
      <SummaryContainer>
        {cartItems.map((item) => (
          <>
            <CoffeeCard key={item.id}>
              <Info>
                <Coffee src={item.imageUrl} alt={item.title} />
                <Details>
                  <CoffeeTitle>{item.title}</CoffeeTitle>
                  <Actions>
                    <CounterContainer>
                      <CounterButton
                        type="button"
                        onClick={() => decreaseItemCart(item.id)}
                      >
                        <Minus size={16} />
                      </CounterButton>
                      <CounterValue>{item.amount}</CounterValue>
                      <CounterButton
                        type="button"
                        onClick={() => increaseItemCart(item.id)}
                      >
                        <Plus size={16} />
                      </CounterButton>
                    </CounterContainer>
                    <RemoveButton
                      type="button"
                      onClick={() => removeItemOfCart(item.id)}
                    >
                      <Trash size={16} /> Remover
                    </RemoveButton>
                  </Actions>
                </Details>
              </Info>
              <Price>R$ {formattedPrice(item.price * item.amount)}</Price>
            </CoffeeCard>
            <Line />
          </>
        ))}
        <PriceWraper>
          <PriceLine>
            <p>Total de itens</p>
            <p>R$ {formattedPrice(itemsPrice)}</p>
          </PriceLine>

          <PriceLine>
            <p>Entrega</p>
            <p>R$ {formattedPrice(deliveryTax)}</p>
          </PriceLine>

          <TotalPriceLine>
            <p>Total</p>
            <p>R$ {formattedPrice(totalPrice)}</p>
          </TotalPriceLine>
        </PriceWraper>
        <ConfirmButton type="submit">Confirmar Pedido</ConfirmButton>
      </SummaryContainer>
    </OrderSummaryContainer>
  )
}
