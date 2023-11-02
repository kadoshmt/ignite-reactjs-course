import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/globals.ts'
import { Router } from './Router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyle />
  </ThemeProvider>,
)
