import styled from 'styled-components'

export const BlogContainer = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
`

export const BlogPostsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4.5rem;

  h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875;
  }
`
export const PostCards = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  flex-wrap: wrap;
`
