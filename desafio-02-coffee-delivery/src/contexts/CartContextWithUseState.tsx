import { produce } from 'immer'
import { ReactNode, createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [totalAmount, setTotalAmount] = useState<number>(0)
  const [itemsPrice, setItemsPrice] = useState<number>(0)
  const [deliveryTax, setDeliveryTax] = useState<number>(12.0)
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [order, setOrder] = useState<Order | undefined>(undefined)

  const navigate = useNavigate()

  function addItemToCart(item: CartItem) {
    const findItemIndex = cartItems.findIndex((cart) => cart.id === item.id)
    if (findItemIndex === -1) {
      setCartItems((state) => [...state, item])
      setTotalAmount((state) => state + item.amount)
    } else {
      const newCart = produce(cartItems, (draft) => {
        draft[findItemIndex].amount = item.amount
      })
      setCartItems(newCart)
    }
  }

  function removeItemOfCart(itemId: string) {
    const findItemIndex = cartItems.findIndex((cart) => cart.id === itemId)
    if (findItemIndex > -1) {
      const newCart = produce(cartItems, (draft) => {
        draft.splice(findItemIndex, 1)
      })
      setCartItems(newCart)
    }
  }

  function increaseItemCart(itemId: string) {
    const findItemIndex = cartItems.findIndex((cart) => cart.id === itemId)
    if (findItemIndex > -1) {
      if (cartItems[findItemIndex].amount <= 9) {
        const newCart = produce(cartItems, (draft) => {
          draft[findItemIndex].amount++
        })
        setCartItems(newCart)
      }
    }
  }

  function decreaseItemCart(itemId: string) {
    const findItemIndex = cartItems.findIndex((cart) => cart.id === itemId)
    if (findItemIndex > -1) {
      if (cartItems[findItemIndex].amount > 0) {
        const newCart = produce(cartItems, (draft) => {
          draft[findItemIndex].amount--
        })
        setCartItems(newCart)
      }
    }
  }

  function setDeliverytaxValue(value: number) {
    setDeliveryTax(value)
  }

  function getItemAmount(itemId: string) {
    const findItem = cartItems.find((cart) => cart.id === itemId)
    return findItem ? findItem.amount : 0
  }

  function createNewOrder(address: Address) {
    const order = {
      cartItems,
      address,
      totalAmount,
      itemsPrice,
      deliveryTax,
      totalPrice,
    }
    setOrder(order)
    setCartItems([])
    setTotalAmount(0)
    navigate('/success')
  }

  useEffect(() => {
    const totalPriceOfCart = cartItems.reduce((acc, item) => {
      return acc + item.amount * item.price
    }, 0)

    const newAmount = cartItems.reduce((acc, item) => {
      return acc + item.amount
    }, 0)

    setItemsPrice(totalPriceOfCart)
    setTotalAmount(newAmount)
    setTotalPrice(totalPriceOfCart + deliveryTax)
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
