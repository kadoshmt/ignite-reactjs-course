import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

export const OrderFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 40rem;
  gap: 0.75rem;
`

export const OrderFormTitle = styled.h2`
  font-size: 1.12rem;
  line-height: 130%;
  font-weight: bold;
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme['base-title']};
`
export const OrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  width: 40rem;
`
export const HeaderLine = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
`

const ICON_COLORS = {
  yellow: 'yellow',
  purple: 'purple',
} as const

interface IconProps {
  iconColor: keyof typeof ICON_COLORS
}

export const HeaderLineIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => prop === 'iconColor' || prop === 'children',
})<IconProps>`
  display: inline-block;
  color: ${(props) => props.theme[ICON_COLORS[props.iconColor]]};
`
export const HeaderLineTitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`
export const HeaderLineDescription = styled.p`
  font-size: 0.85rem;
  line-height: 130%;
  font-weight: 400;
`
export const Row = styled.div`
  display: flex;
  gap: 0.75rem;
  width: 100%;
  margin-top: 1rem;
`
export const Col = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`

export const BaseInputText = styled.input`
  padding: 0.75rem;
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  font-size: 14px;
  color: ${(props) => props.theme['base-label']};
`

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: number
}

export const Optional = styled.span`
  display: block;
  position: absolute;
  right: 0;
  margin: 0.85rem 0.75rem 0 0;
  font-style: italic;
  color: ${(props) => props.theme['base-label']};
  font-size: 14px;
`

export const InputText = styled.input<InputTextProps>`
  width: ${(props) => (props.inputSize ? props.inputSize : 12.5)}rem;
  padding: 0.75rem;
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  font-size: 14px;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border-color: ${(props) => props.theme['yellow-dark']};
    outline-color: transparent !important;
    box-shadow: none;
  }

  &:focus::placeholder {
    color: transparent;
  }
`

export const OrderPaymentOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.75rem;
  margin-top: 1rem;
`

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  isChecked: boolean
}

export const RadioButton = styled.button<RadioButtonProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  width: 11.16rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  background-color: ${(props) =>
    props.isChecked
      ? props.theme['purple-light']
      : (props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border: 1px solid transparent;
  border-color: ${(props) =>
    props.isChecked ? props.theme.purple : 'transparent'};
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
    border: 1px solid transparent;
  }

  svg {
    color: ${(props) => props.theme.purple};
    margin-right: 0.75rem;
  }
`
export const RadioButtonInput = styled.input`
  display: none; /* Esconde o input real */
`
