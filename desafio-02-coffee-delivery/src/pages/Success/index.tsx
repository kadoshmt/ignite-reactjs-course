import {
  InfoCard,
  InfoCardBackground,
  InfoImage,
  InfoLine,
  InfoLineIcon,
  InfoLineText,
  InfoWrapper,
  SuccessContainer,
  SuccessMessage,
} from './styles'
import Driver from '../../assets/driver.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  return (
    <SuccessContainer>
      <SuccessMessage>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessMessage>
      <InfoWrapper>
        <InfoCardBackground>
          <InfoCard>
            <InfoLine>
              <InfoLineIcon color="purple">
                <MapPin size={16} weight="fill" />
              </InfoLineIcon>
              <InfoLineText>
                <p>
                  Entrega em Rua <strong>João Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </InfoLineText>
            </InfoLine>
            <InfoLine>
              <InfoLineIcon color="yellow">
                <Timer size={16} weight="fill" />
              </InfoLineIcon>
              <InfoLineText>
                <p>Previsão de entrega</p>
                <p>
                  <strong>20min - 30min</strong>
                </p>
              </InfoLineText>
            </InfoLine>
            <InfoLine>
              <InfoLineIcon color="orange">
                <CurrencyDollar size={16} weight="fill" />
              </InfoLineIcon>
              <InfoLineText>
                <p>Pagamento na entrega</p>
                <p>
                  <strong>Cartão de crédito</strong>
                </p>
              </InfoLineText>
            </InfoLine>
          </InfoCard>
        </InfoCardBackground>
        <InfoImage>
          <img src={Driver} alt="Entregador dirigindo uma moto" width="492px" />
        </InfoImage>
      </InfoWrapper>
    </SuccessContainer>
  )
}
