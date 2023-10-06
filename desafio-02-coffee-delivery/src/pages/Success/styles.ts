import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 70rem;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 10rem;
`
export const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h2 {
    font-family: 'Baloo 2', 'Roboto', sans-serif;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }
  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const InfoWrapper = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`
export const InfoCardBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32.87rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
  border: 0px transparent solid;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );
`
export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(32.87rem - 2px);
  padding: 2.5rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
  border: 0px solid transparent;
  margin: 1px;
  background-color: ${(props) => props.theme.white};
`
export const InfoLine = styled.div`
  display: flex;

  width: 100%;

  margin-top: 2rem;

  &:first-child {
    margin-top: 0;
  }
`

const LIST_ITEM = {
  orange: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface ListItemsProps {
  color: keyof typeof LIST_ITEM
}

export const InfoLineIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => prop === 'color' || prop === 'children',
})<ListItemsProps>`
  display: flex;
  background: ${(props) => props.theme[LIST_ITEM[props.color]]};
  width: 2rem;
  height: 2rem;
  color: ${(props) => props.theme.white};
  border-radius: 50%;
  padding: 0.5rem;
  margin-right: 0.75rem;
`
export const InfoLineText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    line-height: 130%;
  }
`
export const InfoImage = styled.div`
  display: flex;
  width: 30.75rem;
`
