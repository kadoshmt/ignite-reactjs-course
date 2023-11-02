import styled from 'styled-components'

export const PostContainer = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
`

export const PostHeader = styled.section`
  width: 100%;
  /* min-height: 212px; */
  padding: 2rem;
  margin-top: -5rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const PostLinks = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  span {
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme.blue};
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      gap: 0.5rem;
      font-size: 1rem;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }

      svg {
        width: 12px;
      }
    }
  }
`

export const PostTitle = styled.h1`
  display: flex;
  line-height: 160%;
  margin-top: 0.5rem;
  color: ${(props) => props.theme['base-title']};
`

export const PostMetadata = styled.div`
  display: flex;
  flex: 1;
  gap: 1.5rem;
  margin-top: 0.25rem;
  color: ${(props) => props.theme['base-span']};

  svg {
    margin-right: 0.5rem;
    width: 18px;
    color: ${(props) => props.theme['base-label']};
  }
`
export const PostContent = styled.div`
  margin: 2.5rem 2rem;
  line-height: 160%;

  p {
    margin: 1.5rem 0;
  }
`
