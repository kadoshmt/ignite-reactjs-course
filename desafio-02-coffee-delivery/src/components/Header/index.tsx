import {
  CartContainer,
  CartCounter,
  HeaderContainer,
  LocationContainer,
  LogoContainer,
} from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'

import logoCoffee from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { totalAmount } = useContext(CartContext)
  return (
    <HeaderContainer>
      <LogoContainer>
        <NavLink to="/" title="Logo">
          <img src={logoCoffee} alt="" />
        </NavLink>
      </LogoContainer>
      <LocationContainer>
        <MapPin size={22} weight="fill" /> <span>Cuiabá, MT</span>
      </LocationContainer>
      <CartContainer>
        <NavLink to="/checkout" title="Ir para o checkout">
          <ShoppingCart size={22} weight="fill" />
          {totalAmount > 0 && <CartCounter>{totalAmount}</CartCounter>}
        </NavLink>
      </CartContainer>
    </HeaderContainer>
  )
}
