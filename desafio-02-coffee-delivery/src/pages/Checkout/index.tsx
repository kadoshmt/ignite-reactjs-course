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
    .max(9, 'Informe um cep válido.'),
  street: zod.string().min(3, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(2, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(2, '2 letras').max(2, '2 letras'),
  payment: zod.string({
    invalid_type_error: 'Você deve selecionar um método de pagamento.',
  }),
})
export type OrderFormData = zod.infer<typeof OrderFormValidationSchema>

export function Checkout() {
  const { totalAmount, createNewOrder } = useContext(CartContext)

  const orderForm = useForm<OrderFormData>({
    resolver: zodResolver(OrderFormValidationSchema),
  })

  const { handleSubmit, reset } = orderForm

  function handleCreateNewOrder(data: OrderFormData) {
    createNewOrder(data)
    reset()
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleCreateNewOrder)}>
      {totalAmount > 0 && (
        <FormProvider {...orderForm}>
          <OrderForm key="form" />
          <OrderSummary key="summary" />
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
