import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 70rem;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 10rem;
`

export const EmptyCartContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 60vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 20rem;
    margin-bottom: 4rem;
  }

  h2 {
    font-family: 'Baloo 2', 'Roboto', sans-serif;
    color: ${(props) => props.theme.purple};
    margin-bottom: 2rem;
  }

  p {
    a {
      text-decoration: none;
      color: ${(props) => props.theme.purple};
      transition: 0.3s;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`
