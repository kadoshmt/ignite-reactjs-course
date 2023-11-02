import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  PostContainer,
  PostContent,
  PostHeader,
  PostLinks,
  PostMetadata,
  PostTitle,
} from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { NavLink, useParams, Navigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { BlogContext, Issue } from '../../contexts/BlogContext'
import { ptBR } from 'date-fns/locale'
import { formatDistanceToNow } from 'date-fns'
import Markdown from 'react-markdown'

export function Post() {
  const { id } = useParams()
  const { fetchPost } = useContext(BlogContext)
  const [post, setPost] = useState<Issue>()

  if (id === undefined) {
    Navigate({ to: '/' })
  }

  async function handleFetchPost(id: string) {
    const response = await fetchPost(id)
    setPost(response)
  }

  useEffect(() => {
    if (id) {
      handleFetchPost(id)
    }
  }, [id])

  return (
    <PostContainer>
      <PostHeader>
        <PostLinks>
          <span>
            <NavLink to="/">
              <FontAwesomeIcon icon={faChevronLeft} /> Voltar
            </NavLink>
          </span>
          <span>
            <a href={post?.html_url} target="_blank" rel="noreferrer">
              Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </span>
        </PostLinks>
        <PostTitle>{post?.title}</PostTitle>
        <PostMetadata>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {post?.user.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            {post &&
              formatDistanceToNow(new Date(post.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {post?.comments} Comentários
          </span>
        </PostMetadata>
      </PostHeader>
      <PostContent>
        <Markdown>{post?.body}</Markdown>
      </PostContent>
    </PostContainer>
  )
}
