import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh', 
  position: 'relative', 
  overflowX: 'hidden',
})

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  button: {
    padding: 12,
    position: 'relative',
    background: '$gray800',
    borderRadius: 6,
    border: 0,
    color: '$white',
    cursor: 'pointer',

    span: {
      position: 'absolute',
      top: -12,
      right: -12,
      color: '$white',
      background: '$green500',
      borderRadius: '50%',
      fontWeight: 700,      
      padding: '4px 8px',
      
      
    }
  }
})

export const CheckoutContainer = styled('aside', {
  position: 'absolute',
  right: -500,
  width: '100%',
  maxWidth: 480,
  minHeight: '100vh',
  padding: '3rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  background: '$gray800',    
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.80)',

  transition: 'right 0.3s',

  [`&.visible`]: {
    right: 0
  }  
})

export const EmptyBasket = styled('div', {
  marginTop: '30vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  
  svg: {
    fill: '$green300'
  },

  div: {
    fontWeight: 'bold',
    color: '$gray300'
  }
})

export const CheckoutHeader = styled('div', { 
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  'div:first-child': {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    marginTop: '-1.5rem',
   

    button: {    
      background: 'transparent',
      border: 0,
      color: '$gray300',
      cursor: 'pointer',
      marginRight: '-1.5rem',
    }
  },

  h3: {
    marginTop: 24,
    marginBottom: 32,    
  }
})

export const CheckoutProduct = styled('div', {
   
  display: 'flex',  
  width: '100%',
  marginTop: 24,
  gap: 20, 
  
})

export const ThumbImageContainer = styled('div', {
  width: 95,
  maxWidth: 95,
  height: 95,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,  

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
    width: 95
  }
})

export const CheckoutProductInfo = styled('div', {
   
  display: 'flex',
  flexDirection: 'column',   
  alignItems: 'flex-start',
  justifyContent: 'flex-start',

  h4: {
    lineHeight: '160%',
    color: '$gray300',
    fontSize: '$md',
    fontWeight: 'normal'
  },

  span: {
    fontSize: '$md',
    fontWeight: 'bold',
    lineHeight: '160%',
  },

  button: {
    marginTop: 8,
    background:  'transparent',
    border: 0,
    color: '$green500',
    fontWeight: 'bold',
    cursor: 'pointer',
    lineHeight: '160%',
  }  
})

export const CheckoutFooter = styled('div', {
  
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',  
  
  div: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',     

    div: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      lineHeight: '160%',
      marginTop: '0.4rem',

      '>span': {
        fontSize: '$md'
      },

      '>span:first-child': {
        fontSize: '1rem'
      },

      '>strong': {
        fontSize: '$lg'
      },

      '>strong:first-child': {
        fontSize: '$md'
      }
    }
  },


  button: {
    marginTop: 57,
    width: '100%',    
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    }
  },  
})