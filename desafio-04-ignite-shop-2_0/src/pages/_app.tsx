import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImg from "../assets/logo.svg"
import { CheckoutContainer, CheckoutFooter, CheckoutHeader, CheckoutProduct, CheckoutProductInfo, Container, EmptyBasket, HeaderContainer, ThumbImageContainer } from "../styles/pages/app"
import Image from 'next/image'
import { Basket, Handbag, X } from '@phosphor-icons/react'

import { useState } from 'react'
import Link from 'next/link'
import { CartProvider, formatCurrencyString } from 'use-shopping-cart'
import { useShoppingCart } from 'use-shopping-cart'

globalStyles()

function App({ Component, pageProps }: AppProps) {  

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const stripePublicKey="pk_test_51O8OKsDXpyzKr28VqgoHdCVhJXpYf39TpuKKPEU5el6tgewdneUeTqk1QnfPMJlq1Qn3tEAFmBbNI6XNTvqKYFL700IQ4YvDKo";
  const appUrl="http://localhost:3000"


  return (
    <CartProvider       
        mode="payment"
        cartMode="client-only"
        stripe={stripePublicKey}
        successUrl={`${appUrl}/success?session_id={CHECKOUT_SESSION_ID}`}
        cancelUrl={`${appUrl}/`}
        currency="BRL"
        shouldPersist={true}
      >   
    
      <Container>     
        <Header onClick={toggleSidebar} />       
        <Component {...pageProps} />
        <Checkout onClick={toggleSidebar} isVisible={isSidebarVisible} />       
      </Container>
    </CartProvider>
  )
}

export function Checkout(props: {  
  isVisible: boolean,
  onClick: (e: any) => void
}) {
  const { removeItem, cartDetails, cartCount, formattedTotalPrice, redirectToCheckout } = useShoppingCart();

  const removeItemFromCart = (id: string) => {
    removeItem(id);
  };

  async function handleClick(event) {
    event.preventDefault();
    if (cartCount > 0) {
      try {
        const result = await redirectToCheckout();
        if (result?.error) {
          console.error(result);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
    }
  }

  return (
    <CheckoutContainer className={props.isVisible ? "visible" : ""}>
        <CheckoutHeader>
          <div><button onClick={props.onClick}><X size={24}/></button></div>
          <h3>Sacola de Compras</h3>

          {Object.values(cartDetails ?? {}).map((entry) => (              
              <CheckoutProduct key={entry.id}>
              <ThumbImageContainer>
                <Image src={entry.image} alt="" width={95} height={95}/>
              </ThumbImageContainer>
              <CheckoutProductInfo>
                <h4>{entry.name}</h4>
                <span> {entry.formattedPrice}</span>
                <button onClick={() => {removeItemFromCart(entry.id)}}>Remover</button>
              </CheckoutProductInfo>
            </CheckoutProduct>
          ))}

          {cartCount === 0 &&(
            <EmptyBasket>
              <Basket size={128} weight="thin" />
              <div>Nenhum produto na cesta!</div>
            </EmptyBasket>
            
          )}
          
        </CheckoutHeader>
        {cartCount > 0 &&(
          <CheckoutFooter>
            <div>
              <div>
                <span>Quantidade</span>
                <span>{cartCount} itens</span>
              </div>
              <div>
                <strong>Valor total</strong>
                <strong><span>{formattedTotalPrice}</span></strong>
              </div>            
            </div>
            <button onClick={handleClick}>Finalizar compra</button>
          </CheckoutFooter>
        )}
        </CheckoutContainer>
  )
}

export function Header(props: {  
  onClick: (e: any) => void
}) {  
  const { cartCount } = useShoppingCart();
  return (
    <HeaderContainer>
      <Link href="/"><Image src={logoImg} alt="" /></Link>
      <button onClick={props.onClick} >
        {cartCount > 0 && (<span>{cartCount}</span>)}
        <Handbag size={24} />
      </button>
      </HeaderContainer>
  )
}

export default App
