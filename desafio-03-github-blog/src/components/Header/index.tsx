import { HeaderContainer, HeaderContent, LogoContainer } from './styles'

import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <img src={logoImg} alt="" />
        </LogoContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
