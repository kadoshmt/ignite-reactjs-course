import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/globals.ts'
import { Router } from './Router.tsx'
import { BlogProvider } from './contexts/BlogContext.tsx'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <BlogProvider>
          <Router />
        </BlogProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
