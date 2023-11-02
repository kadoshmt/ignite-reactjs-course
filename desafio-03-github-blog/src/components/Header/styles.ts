import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-image: url('/src/assets/cover.png');
`

export const HeaderContent = styled.div`
  width: 100%;
  height: 18.5rem;
  max-width: 1440px;
  max-height: 296px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: start;
`

export const LogoContainer = styled.div`
  margin-top: 4rem;

  img {
    :hover {
      color: none;
    }
  }
`
