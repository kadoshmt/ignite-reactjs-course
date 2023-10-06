import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  width: 100vw;
  padding: 5.75rem 0rem;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  background: no-repeat center url(/src/assets/home-banner-background.png);
`

export const BannerInfo = styled.div`
  width: 36.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    font-size: 3rem;
    line-height: 130%;
    font-weight: bolder;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-title']};
  }
  p {
    margin-top: 1rem;
    font-size: 1.25rem;
  }
`

const BANNER_LIST_ITEM = {
  orange: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface ListItemsProps {
  color: keyof typeof BANNER_LIST_ITEM
}

export const BannerInfoList = styled.ul`
  margin-top: 4.12rem;
  display: flex;
  list-style: none;
  // background-color: red;
  flex-wrap: wrap;
  gap: 1.75rem 0rem;
`

export const BannerInfoListItem = styled.li.withConfig({
  shouldForwardProp: (prop) => prop === 'color' || prop === 'children',
})<ListItemsProps>`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  //      background-color: yellow;

  figure {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme[BANNER_LIST_ITEM[props.color]]};
  }

  figcaption {
  }
`

export const BannerImage = styled.div`
  width: 29.19rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
