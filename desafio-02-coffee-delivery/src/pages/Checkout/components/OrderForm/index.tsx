import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  OrderFormTitle,
  OrderFormContainer,
  HeaderLine,
  Row,
  InputText,
  HeaderLineTitle,
  HeaderLineDescription,
  HeaderLineIcon,
  Optional,
  OrderFormWrapper,
  Col,
  RadioButtonInput,
  RadioButton,
  OrderPaymentOptions,
} from './styles'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

export function OrderForm() {
  // const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [selectedOption, setSelectedOption] = useState('money')

  const handleChangePaymentOption = (option: string) => {
    setSelectedOption(option)
  }

  const { register } = useFormContext()

  return (
    <OrderFormWrapper>
      <OrderFormTitle>Complete seu pedido</OrderFormTitle>
      <OrderFormContainer>
        <HeaderLine>
          <HeaderLineIcon iconColor="yellow">
            <MapPinLine size={22} />
          </HeaderLineIcon>
          <div>
            <HeaderLineTitle>Endereço de Entrega</HeaderLineTitle>
            <HeaderLineDescription>
              Informe o endereço onde deseja receber seu pedido
            </HeaderLineDescription>
          </div>
        </HeaderLine>
        <Row>
          <Col>
            <InputText
              id="zipcode"
              {...register('zipcode')}
              placeholder="CEP"
              inputSize={12.5}
              required
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <InputText
              id="street"
              {...register('street')}
              placeholder="Rua"
              inputSize={35}
              required
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <InputText
              id="number"
              {...register('number')}
              placeholder="Número"
              inputSize={12.5}
              required
            />
          </Col>
          <Col>
            <InputText
              id="complement"
              {...register('complement')}
              placeholder="Complemento"
              inputSize={21.75}
            />
            <Optional>Opcional</Optional>
          </Col>
        </Row>

        <Row>
          <Col>
            <InputText
              id="neighborhood"
              {...register('neighborhood')}
              placeholder="Bairro"
              inputSize={12.5}
              required
            />
          </Col>
          <Col>
            <InputText
              id="city"
              {...register('city')}
              placeholder="Cidade"
              inputSize={17.25}
              required
            />
          </Col>
          <Col>
            <InputText
              id="state"
              {...register('state')}
              placeholder="UF"
              inputSize={3.75}
              required
            />
          </Col>
        </Row>
      </OrderFormContainer>
      <OrderFormContainer>
        <HeaderLine>
          <HeaderLineIcon iconColor="purple">
            <CurrencyDollar size={22} />
          </HeaderLineIcon>
          <div>
            <HeaderLineTitle>Pagamento</HeaderLineTitle>
            <HeaderLineDescription>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </HeaderLineDescription>
          </div>
        </HeaderLine>
        <OrderPaymentOptions>
          <>
            <RadioButtonInput
              id="payment"
              key="creditCard"
              value="creditCard"
              type="radio"
              defaultChecked={selectedOption === 'creditCard'}
              // onChange={() => handleChangePaymentOption(index)}
            />
            <RadioButton
              type="button"
              isChecked={selectedOption === 'creditCard'}
              onClick={() => handleChangePaymentOption('creditCard')}
            >
              <CreditCard size={16} />
              Cartão de Crédito
            </RadioButton>
          </>
          <>
            <RadioButtonInput
              id="payment"
              key="debitCard"
              value="debitCard"
              type="radio"
              defaultChecked={selectedOption === 'debitCard'}
              // onChange={() => handleChangePaymentOption(index)}
            />
            <RadioButton
              type="button"
              isChecked={selectedOption === 'debitCard'}
              onClick={() => handleChangePaymentOption('debitCard')}
            >
              <Bank size={16} />
              Cartão de Dédito
            </RadioButton>
          </>
          <>
            <RadioButtonInput
              id="payment"
              key="money"
              value="money"
              type="radio"
              defaultChecked={selectedOption === 'money'}
              // onChange={() => handleChangePaymentOption(index)}
            />
            <RadioButton
              type="button"
              isChecked={selectedOption === 'money'}
              onClick={() => handleChangePaymentOption('money')}
            >
              <Money size={16} />
              Dinheiro
            </RadioButton>
          </>
        </OrderPaymentOptions>
      </OrderFormContainer>
    </OrderFormWrapper>
  )
}
