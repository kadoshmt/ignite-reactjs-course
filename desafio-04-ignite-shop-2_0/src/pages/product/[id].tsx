import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image";
import { useState } from "react";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import Head from 'next/head';
import { useShoppingCart } from 'use-shopping-cart';
import { useRouter } from 'next/navigation';

interface ProductProps {
  product: {
    id: string
    name: string
    image: string
    price: string
    currency: string
    description: string    
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  const { addItem, cartDetails } = useShoppingCart()
  const { push } = useRouter();

  const addToCart = (product) => {
    
    const itemExists = Object.values(cartDetails).some(item =>  item.id === product.id);
    
    if (!itemExists){
      addItem(product, { count: 1 });
    }
      
    push("/");
  };

  const formattedPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price / 100)
  }

 

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.image} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{formattedPrice(Number.parseInt(product.price) )}</span>

          <p>{product.description}</p>

          <button onClick={()=>addToCart(product)}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_MLH5Wy0Y97hDAC' } },
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: price.id,
        name: product.name,
        image: product.images[0],
        currency: 'BRL',
        // price: new Intl.NumberFormat('pt-BR', {
        //   style: 'currency',
        //   currency: 'BRL'
        // }).format(price.unit_amount / 100),
        price: price.unit_amount,
        description: product.description,
        //defaultPriceId: price.id,
        sku: product.id        
      }
    },
    revalidate: 60 * 60 * 1 // 1 hours
  }
}