import { BlockList } from 'net';
import { styled } from "..";
import { Arrow } from '../../pages';

Arrow.toString = () => '.arrow';

export const NavigationWrapper = styled('div', {
  position: 'relative',  

  [`& ${Arrow}`]: {
    width: '48px',
    height: '48px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    "-webkit-transform": 'translateY(-50%)',
    fill: 'White',
    cursor: 'pointer',
    

    '&.arrow--left': {
      left: 5,      
    },
  
    '&.arrow--right': {
      left: 'auto',
      right: 5
    },
    '&.arrow--disabled': {
      fill: 'rgba(255, 255, 255, 0.5)',
      display: 'none'
      
    }
  },

  
})






export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  //maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  maxWidth: '100vw',
  overflowX: 'hidden',
  marginLeft: 'auto',
  minHeight: 656,  
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    'div:first-child': {
      display: 'flex',
      flexDirection: 'column',

      strong: {
        display: 'block',
        fontSize: '$md',
        color: '$gray100',
      },
  
      span: {
        display: 'block',
        fontSize: '$lg',
        fontWeight: 'bold',
        color: '$green300'
      },   
    },

    'div:last-child': {
      padding: 12,
      background: '$green500',
      borderRadius: 6,
      border: 0,
      marginLeft: 8,

      '& svg': {
        fill: '$white',        
      }
      
    }

    
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1
    }
  }
})