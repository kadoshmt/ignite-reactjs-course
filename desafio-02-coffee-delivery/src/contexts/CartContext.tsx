import { ReactNode, createContext, useEffect, useState } from 'react'

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

  function addItemToCart(item: CartItem) {
    const findItem = cartItems.find((cart) => cart.id === item.id)
    if (!findItem) {
      setCartItems((state) => [...state, item])
      setTotalAmount((state) => state + item.amount)
    } else {
      const { amount } = findItem
      findItem.amount = item.amount
      setCartItems((state) => [
        ...state.filter((cart) => cart.id !== item.id),
        findItem,
      ])
      setTotalAmount((state) => state - amount + item.amount)
    }
  }

  function removeItemOfCart(itemId: string) {
    const findItemIndex = cartItems.findIndex((cart) => cart.id === itemId)
    if (findItemIndex > -1) {
      const amoutToDecrease = cartItems[findItemIndex].amount
      const newCart = cartItems.filter((cart) => cart.id !== itemId)
      setCartItems(newCart)
      setTotalAmount((state) => state - amoutToDecrease)
    }
  }

  function increaseItemCart(itemId: string) {
    const findItemIndex = cartItems.findIndex((cart) => cart.id === itemId)
    if (findItemIndex > -1) {
      if (cartItems[findItemIndex].amount <= 9) {
        const newCart = [...cartItems]
        newCart[findItemIndex].amount++
        setCartItems(newCart)
        setTotalAmount((state) => state++)
      }
    }
  }

  function decreaseItemCart(itemId: string) {
    const findItemIndex = cartItems.findIndex((cart) => cart.id === itemId)
    if (findItemIndex > -1) {
      if (cartItems[findItemIndex].amount > 0) {
        const newCart = [...cartItems]
        newCart[findItemIndex].amount--
        setCartItems(newCart)
        setTotalAmount((state) => state--)
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
  }

  useEffect(() => {
    const totalPriceOfCart = cartItems.reduce((acc, item) => {
      return acc + item.amount * item.price
    }, 0)

    setItemsPrice(totalPriceOfCart)
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
