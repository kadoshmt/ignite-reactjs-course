import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Post } from '../../../../contexts/BlogContext'
import { CardHeader, CardText, CardContainer } from './styles'

interface CardProps {
  post: Post
}

export function Card({ post }: CardProps) {
  return (
    <CardContainer to={`/post/${post.number}`}>
      <CardHeader>
        <h3>{post.title}</h3>
        <span>
          {formatDistanceToNow(new Date(post.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </CardHeader>
      <CardText>
        {post.body}
        {!post.body && 'Esta publicação não possui conteúdo.'}
      </CardText>
    </CardContainer>
  )
}
