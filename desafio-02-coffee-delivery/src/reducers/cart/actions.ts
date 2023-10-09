import { CartItem, Address } from './reducer'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_OF_CART = 'REMOVE_ITEM_OF_CART',
  INCREASE_ITEM_CART = 'INCREASE_ITEM_CART',
  DECREASE_ITEM_CART = 'DECREASE_ITEM_CART',
  SET_DELIVERY_TAX_VALUE = 'SET_DELIVERY_TAX_VALUE',
  GET_ITEM_AMOUNT = 'GET_ITEM_AMOUNT',
  CREATE_NEW_ORDER = 'CREATE_NEW_ORDER',

  SET_TOTAL_PRICE_AND_AMOUNT = 'SET_TOTAL_PRICE_AND_AMOUNT',
}

export function addItemToCartAction(item: CartItem) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: item,
  }
}
export function removeItemOfCartAction(itemId: string) {
  return {
    type: ActionTypes.REMOVE_ITEM_OF_CART,
    payload: itemId,
  }
}
export function increaseItemCartAction(itemId: string) {
  return {
    type: ActionTypes.INCREASE_ITEM_CART,
    payload: itemId,
  }
}
export function decreaseItemCartAction(itemId: string) {
  return {
    type: ActionTypes.DECREASE_ITEM_CART,
    payload: itemId,
  }
}
export function setDeliverytaxValueAction(value: number) {
  return {
    type: ActionTypes.SET_DELIVERY_TAX_VALUE,
    payload: value,
  }
}

export function createNewOrderAction(address: Address) {
  return {
    type: ActionTypes.CREATE_NEW_ORDER,
    payload: address,
  }
}

export function setTotalPriceAndAmount() {
  return {
    type: ActionTypes.SET_TOTAL_PRICE_AND_AMOUNT,
  }
}
