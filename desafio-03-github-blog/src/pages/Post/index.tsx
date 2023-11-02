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

export function Post() {
  return (
    <PostContainer>
      <PostHeader>
        <PostLinks>
          <span>
            <a href="">
              <FontAwesomeIcon icon={faChevronLeft} /> Voltar
            </a>
          </span>
          <span>
            <a href="">
              Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </span>
        </PostLinks>
        <PostTitle>JavaScript data types and data structures</PostTitle>
        <PostMetadata>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            cameronwll
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            Há 1 dia
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />5 Comentários
          </span>
        </PostMetadata>
      </PostHeader>
      <PostContent>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
        <p>Dynamic typing</p>
        <p>
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </p>
      </PostContent>
    </PostContainer>
  )
}
