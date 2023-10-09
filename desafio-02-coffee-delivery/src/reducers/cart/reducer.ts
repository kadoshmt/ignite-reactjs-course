import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface CartItem {
  id: string
  title: string
  imageUrl: string
  price: number
  amount: number
}

export interface Address {
  zipcode: string
  street: string
  number: string
  complement?: string | null
  neighborhood: string
  city: string
  state: string
  payment: string
}

export interface Order {
  orderId?: string
  address: Address
  cartItems: CartItem[]
  totalAmount: number
  itemsPrice: number
  deliveryTax: number
  totalPrice: number
}

export interface cartStateType {
  cartItems: CartItem[]
  totalAmount: number
  itemsPrice: number
  deliveryTax: number
  totalPrice: number
  order?: Order
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cartReducer(state: cartStateType, action: any): cartStateType {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART: {
      const findItemIndex = state.cartItems.findIndex(
        (cart) => cart.id === action.payload.id,
      )
      if (findItemIndex === -1) {
        return produce(state, (draft) => {
          draft.cartItems.push(action.payload)
          draft.totalAmount += action.payload.amount
        })
      } else {
        return produce(state, (draft) => {
          draft.cartItems[findItemIndex].amount = action.payload.amount
          draft.totalAmount +=
            action.payload.amount - draft.cartItems[findItemIndex].amount
        })
      }
    }

    case ActionTypes.REMOVE_ITEM_OF_CART: {
      const findItemIndex = state.cartItems.findIndex(
        (cart) => cart.id === action.payload,
      )
      if (findItemIndex > -1) {
        return produce(state, (draft) => {
          draft.totalAmount -= draft.cartItems[findItemIndex].amount
          draft.cartItems.splice(findItemIndex, 1)
        })
      }
      return state
    }

    case ActionTypes.INCREASE_ITEM_CART: {
      const findItemIndex = state.cartItems.findIndex(
        (cart) => cart.id === action.payload,
      )
      if (findItemIndex > -1) {
        if (state.cartItems[findItemIndex].amount <= 9) {
          return produce(state, (draft) => {
            draft.cartItems[findItemIndex].amount++
            draft.totalAmount++
          })
        }
      }
      return state
    }

    case ActionTypes.DECREASE_ITEM_CART: {
      const findItemIndex = state.cartItems.findIndex(
        (cart) => cart.id === action.payload,
      )
      if (findItemIndex > -1) {
        if (state.cartItems[findItemIndex].amount > 0) {
          return produce(state, (draft) => {
            draft.cartItems[findItemIndex].amount--
            draft.totalAmount--
          })
        }
      }
      return state
    }

    case ActionTypes.SET_DELIVERY_TAX_VALUE:
      return { ...state, deliveryTax: action.payload }

    case ActionTypes.CREATE_NEW_ORDER: {
      const order = {
        cartItems: state.cartItems,
        address: action.payload,
        totalAmount: state.totalAmount,
        itemsPrice: state.itemsPrice,
        deliveryTax: state.deliveryTax,
        totalPrice: state.totalPrice,
      }
      return produce(state, (draft) => {
        draft.order = order
        draft.cartItems = []
        draft.totalAmount = 0
      })
    }

    case ActionTypes.SET_TOTAL_PRICE_AND_AMOUNT: {
      const totalPriceOfCart = state.cartItems.reduce((acc, item) => {
        return acc + item.amount * item.price
      }, 0)

      const newAmount = state.cartItems.reduce((acc, item) => {
        return acc + item.amount
      }, 0)

      return produce(state, (draft) => {
        draft.totalAmount = newAmount
        draft.itemsPrice = totalPriceOfCart
        draft.totalPrice = totalPriceOfCart + draft.deliveryTax
      })
    }

    default:
      return state
  }
}
