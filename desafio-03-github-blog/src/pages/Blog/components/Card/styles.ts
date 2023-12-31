import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const CardContainer = styled(NavLink)`
  width: 416px;
  padding: 2rem;
  border-radius: 10px;

  border: 2px solid transparent;

  color: ${(props) => props.theme['base-text']};
  text-decoration: none;

  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme['base-post']};

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.25rem;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
    line-height: 160%;
    display: inline-block;
    min-width: 82px;
    max-width: 82px;
    margin-left: 1rem;
    text-align: right;
  }
`
export const CardText = styled.p`
  line-height: 160%;
  margin-top: 1.25rem;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  overflow: hidden;
  -webkit-box-orient: vertical;
`
