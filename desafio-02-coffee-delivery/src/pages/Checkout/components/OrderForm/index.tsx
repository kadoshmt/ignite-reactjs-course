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
  InputError,
  LabelError,
} from './styles'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { OrderFormData } from '../..'

export function OrderForm() {
  // const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [selectedOption, setSelectedOption] = useState('')

  const handleChangePaymentOption = (option: string) => {
    setSelectedOption(option)
  }

  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<OrderFormData>()

  const complement = watch('complement')

  return (
    <OrderFormWrapper>
      <OrderFormTitle>Complete seu pedido</OrderFormTitle>
      <OrderFormContainer>
        <HeaderLine>
          <HeaderLineIcon color="yellow">
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
              $inputSize={12.5}
              $hasError={errors.zipcode !== undefined}
            />
            {errors.zipcode && (
              <InputError> {errors.zipcode?.message}</InputError>
            )}
          </Col>
        </Row>

        <Row>
          <Col>
            <InputText
              id="street"
              {...register('street')}
              placeholder="Rua"
              $inputSize={35}
              $hasError={errors.street !== undefined}
            />
            {errors.street && (
              <InputError> {errors.street?.message}</InputError>
            )}
          </Col>
        </Row>

        <Row>
          <Col>
            <InputText
              id="number"
              {...register('number')}
              placeholder="Número"
              $inputSize={12.5}
              $hasError={errors.number !== undefined}
            />
            {errors.number && (
              <InputError> {errors.number?.message}</InputError>
            )}
          </Col>
          <Col>
            <InputText
              id="complement"
              {...register('complement')}
              placeholder="Complemento"
              $inputSize={21.75}
              $hasError={errors.complement !== undefined}
            />
            {!complement && <Optional>Opcional</Optional>}
            {errors.complement && (
              <InputError> {errors.complement?.message}</InputError>
            )}
          </Col>
        </Row>

        <Row>
          <Col>
            <InputText
              id="neighborhood"
              {...register('neighborhood')}
              placeholder="Bairro"
              $inputSize={12.5}
              $hasError={errors.neighborhood !== undefined}
            />
            {errors.neighborhood && (
              <InputError> {errors.neighborhood?.message}</InputError>
            )}
          </Col>
          <Col>
            <InputText
              id="city"
              {...register('city')}
              placeholder="Cidade"
              $inputSize={17.25}
              $hasError={errors.city !== undefined}
            />
            {errors.city && <InputError> {errors.city?.message}</InputError>}
          </Col>
          <Col>
            <InputText
              id="state"
              {...register('state')}
              placeholder="UF"
              $inputSize={3.75}
              $hasError={errors.state !== undefined}
            />
            {errors.state && <InputError> {errors.state?.message}</InputError>}
          </Col>
        </Row>
      </OrderFormContainer>
      <OrderFormContainer>
        <HeaderLine>
          <HeaderLineIcon color="purple">
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
              id="creditCardOption"
              key="creditCardOption"
              value="creditCard"
              type="radio"
              defaultChecked={selectedOption === 'creditCard'}
              {...register('payment')}
            />
            <RadioButton
              htmlFor="creditCardOption"
              $isChecked={selectedOption === 'creditCard'}
              onClick={() => handleChangePaymentOption('creditCard')}
            >
              <CreditCard size={16} />
              Cartão de Crédito
            </RadioButton>
          </>
          <>
            <RadioButtonInput
              id="debitCardOption"
              key="debitCardOption"
              value="debitCard"
              type="radio"
              defaultChecked={selectedOption === 'debitCard'}
              {...register('payment')}
            />
            <RadioButton
              htmlFor="debitCardOption"
              $isChecked={selectedOption === 'debitCard'}
              onClick={() => handleChangePaymentOption('debitCard')}
            >
              <Bank size={16} />
              Cartão de Débito
            </RadioButton>
          </>
          <>
            <RadioButtonInput
              id="moneyOption"
              key="moneyOption"
              value="money"
              type="radio"
              defaultChecked={selectedOption === 'money'}
              {...register('payment')}
            />
            <RadioButton
              htmlFor="moneyOption"
              $isChecked={selectedOption === 'money'}
              onClick={() => handleChangePaymentOption('money')}
            >
              <Money size={16} />
              Dinheiro
            </RadioButton>
          </>
        </OrderPaymentOptions>
        {errors.payment && <LabelError> {errors.payment?.message}</LabelError>}
      </OrderFormContainer>
    </OrderFormWrapper>
  )
}
