import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { OrderForm } from './components/OrderForm'
import { OrderSummary } from './components/OrderSummary'
import { CheckoutContainer, EmptyCartContainer } from './styles'
import DrinkCoffee from '../../assets/drink_coffee.svg'
import { NavLink } from 'react-router-dom'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

const OrderFormValidationSchema = zod.object({
  zipcode: zod
    .string()
    .min(8, 'Informe um cep válido.')
    .max(9, 'O CEP deve ter o padrão 78000000 ou 78000-000.'),
  street: zod.string().min(3, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(2, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe o estado'),
  payment: zod.string().min(1, 'Selecione uma forma de pagamento'),
})
type OrderFormData = zod.infer<typeof OrderFormValidationSchema>

export function Checkout() {
  const { totalAmount, createNewOrder } = useContext(CartContext)

  const orderForm = useForm<OrderFormData>({
    resolver: zodResolver(OrderFormValidationSchema),
  })

  const { handleSubmit, reset } = orderForm

  function handleCreateNewOrder(data: OrderFormData) {
    // createNewOrder(data)
    console.log(data)
    reset()
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleCreateNewOrder)}>
      {totalAmount > 0 && (
        <FormProvider {...orderForm}>
          <OrderForm key="form" />
          <OrderSummary key="sumary" />
        </FormProvider>
      )}

      {totalAmount === 0 && (
        <EmptyCartContainer>
          <img src={DrinkCoffee} alt="Pessoa tomando um café" />
          <h2> Opa! Parece que você não selecionou nenhuma bebida!</h2>
          <p>
            Retorna para a <NavLink to="/">página inicial</NavLink> e escolha
            sua bebida.
          </p>
        </EmptyCartContainer>
      )}
    </CheckoutContainer>
  )
}
