import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  min-height: 212px;
  padding: 2rem;
  margin-top: -5rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`

export const Avatar = styled.div`
  width: 148px;
  height: 148px;
  margin-left: 0.5rem;

  img {
    border-radius: 8px;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 148px;
  margin-left: 2rem;
`

export const InfoHeader = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  h2 {
    color: ${(props) => props.theme['base-title']};
  }

  span {
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme.blue};
      text-decoration: none;
      font-weight: bold;
      gap: 0.5rem;
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

export const InfoDescription = styled.p`
  display: flex;
  line-height: 160%;
  margin-top: 1rem;
`

export const InfoSocialMedia = styled.div`
  display: flex;
  flex: 1;
  gap: 1.5rem;
  margin-top: 1.5rem;
  color: ${(props) => props.theme['base-subtitle']};

  svg {
    margin-right: 0.5rem;
    width: 18px;
    color: ${(props) => props.theme['base-label']};
  }
`
