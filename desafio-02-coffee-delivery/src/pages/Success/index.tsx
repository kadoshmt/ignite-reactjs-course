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
import { useContext, useEffect } from 'react'
import { CartContext, CartContextType } from '../../contexts/CartContext'
import { useNavigate } from 'react-router-dom'

export function Success() {
  const { order } = useContext<CartContextType>(CartContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (!order) {
      navigate('/')
    }
  }, [navigate, order])

  function paymentText(type: string): string {
    switch (type) {
      case 'money':
        return 'Dinheiro'
      case 'creditCard':
        return 'Cartão de Crédito'
      case 'debitCard':
        return 'Cartão de Débito'
      default:
        return 'Não Informado'
    }
  }

  return (
    <SuccessContainer>
      {order && (
        <>
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
                      Entrega em{' '}
                      <strong>
                        {order?.address.street}, {order?.address.number}
                      </strong>
                    </p>
                    <p>
                      {order?.address.neighborhood} - {order?.address.city},{' '}
                      {order?.address.state}
                    </p>
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
                      <strong>
                        {paymentText(order?.address.payment ?? '')}
                      </strong>
                    </p>
                  </InfoLineText>
                </InfoLine>
              </InfoCard>
            </InfoCardBackground>
            <InfoImage>
              <img
                src={Driver}
                alt="Entregador dirigindo uma moto"
                width="492px"
              />
            </InfoImage>
          </InfoWrapper>
        </>
      )}
    </SuccessContainer>
  )
}
