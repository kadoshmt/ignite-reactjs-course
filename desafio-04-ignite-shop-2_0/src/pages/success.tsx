import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, ImageWrapper, SuccessContainer } from "../styles/pages/success";
import Head from 'next/head';
import { Images } from '@phosphor-icons/react';
import { useEffect } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

interface SuccessProps {
  costumerName: string;
  images: string[];
}

export default function Success({ costumerName, images }: SuccessProps) {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada</h1>

        <ImageWrapper>
          {images.map((image) => (
            <ImageContainer key={image}>
              <Image src={image} width={120} height={110} alt="" />
            </ImageContainer>
          ))}
        </ImageWrapper>
        

        <p>
          Uhuul <strong>{costumerName}</strong>, sua compra de {images.length} camiseta{images.length >= 2 && ('s')} já {images.length > 1 ? 'estão' : 'está'} a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const costumerName = session.customer_details.name;
  const products =  session.line_items.data.map((item) => item.price.product as Stripe.Product) 
  const images = products.map(item => (item.images[0]))

  return {
    props: {
      costumerName,
      images: images
    }
  }
}