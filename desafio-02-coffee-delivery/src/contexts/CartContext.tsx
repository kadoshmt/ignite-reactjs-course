import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { cartReducer, cartStateType } from '../reducers/cart/reducer'
import {
  addItemToCartAction,
  createNewOrderAction,
  decreaseItemCartAction,
  increaseItemCartAction,
  removeItemOfCartAction,
  setDeliverytaxValueAction,
  setTotalPriceAndAmount,
} from '../reducers/cart/actions'

interface CartItem {
  id: string
  title: string
  imageUrl: string
  price: number
  amount: number
}

interface Address {
  zipcode: string
  street: string
  number: string
  complement?: string | null
  neighborhood: string
  city: string
  state: string
  payment: string
}

interface Order {
  orderId?: string
  address: Address
  cartItems: CartItem[]
  totalAmount: number
  itemsPrice: number
  deliveryTax: number
  totalPrice: number
}

export interface CartContextType {
  cartItems: CartItem[]
  totalAmount: number
  itemsPrice: number
  deliveryTax: number
  totalPrice: number
  order?: Order
  addItemToCart: (item: CartItem) => void
  removeItemOfCart: (itemId: string) => void
  increaseItemCart: (itemId: string) => void
  decreaseItemCart: (itemId: string) => void
  setDeliverytaxValue: (value: number) => void
  getItemAmount: (itemId: string) => number
  createNewOrder: (address: Address) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

const initialStateArgs: cartStateType = {
  cartItems: [],
  totalAmount: 0,
  itemsPrice: 0,
  deliveryTax: 12.0,
  totalPrice: 0,
  order: undefined,
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    initialStateArgs,
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { cartItems, totalAmount, itemsPrice, deliveryTax, totalPrice, order } =
    cartState

  const navigate = useNavigate()

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  function addItemToCart(item: CartItem) {
    dispatch(addItemToCartAction(item))
  }

  function removeItemOfCart(itemId: string) {
    dispatch(removeItemOfCartAction(itemId))
  }

  function increaseItemCart(itemId: string) {
    dispatch(increaseItemCartAction(itemId))
  }

  function decreaseItemCart(itemId: string) {
    dispatch(decreaseItemCartAction(itemId))
  }

  function setDeliverytaxValue(value: number) {
    dispatch(setDeliverytaxValueAction(value))
  }

  function getItemAmount(itemId: string) {
    const findItem = cartItems.find((cart) => cart.id === itemId)
    return findItem ? findItem.amount : 0
  }

  function createNewOrder(address: Address) {
    dispatch(createNewOrderAction(address))
    navigate('/success')
  }

  useEffect(() => {
    dispatch(setTotalPriceAndAmount())
  }, [totalAmount, cartItems, deliveryTax])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalAmount,
        itemsPrice,
        deliveryTax,
        totalPrice,
        order,
        addItemToCart,
        increaseItemCart,
        decreaseItemCart,
        removeItemOfCart,
        setDeliverytaxValue,
        getItemAmount,
        createNewOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
