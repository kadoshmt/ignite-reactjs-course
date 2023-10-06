import cupCoffee from '../../../../assets/cup-coffee-delivery.png'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import {
  BannerContainer,
  BannerInfo,
  BannerInfoList,
  BannerInfoListItem,
  BannerImage,
} from './styles'

export function Banner() {
  return (
    <BannerContainer>
      <BannerInfo>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <BannerInfoList>
          <BannerInfoListItem color="orange">
            <figure>
              <ShoppingCart size={16} weight="fill" />
            </figure>
            <figcaption>Compra simples e segura</figcaption>
          </BannerInfoListItem>
          <BannerInfoListItem color="gray">
            <figure>
              <Package size={16} weight="fill" />
            </figure>
            <figcaption>Embalagem mantém o café intacto</figcaption>
          </BannerInfoListItem>
          <BannerInfoListItem color="yellow">
            <figure>
              <Timer size={16} weight="fill" />
            </figure>
            <figcaption>Entrega rápida e rastreada</figcaption>
          </BannerInfoListItem>
          <BannerInfoListItem color="purple">
            <figure>
              <Coffee size={16} weight="fill" />
            </figure>
            <figcaption>O café chega fresquinho até você</figcaption>
          </BannerInfoListItem>
        </BannerInfoList>
      </BannerInfo>
      <BannerImage>
        <img src={cupCoffee} alt="Copo de Café com fundo amarelo" />
      </BannerImage>
    </BannerContainer>
  )
}
