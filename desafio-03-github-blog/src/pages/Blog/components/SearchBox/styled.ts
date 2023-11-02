import styled from 'styled-components'

export const SearchBoxContainer = styled.form`
  width: 100%;
  max-width: 864px;
  margin-top: 0.75rem;

  input[type='text'] {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    padding: 1rem;
    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
