import {
  Avatar,
  InfoContainer,
  InfoDescription,
  InfoHeader,
  InfoSocialMedia,
  ProfileContainer,
} from './styled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { GitUser } from '../../../../contexts/BlogContext'

interface ProfileProps {
  gitUser?: GitUser
}

export function Profile({ gitUser }: ProfileProps) {
  return (
    <ProfileContainer>
      <Avatar>
        {gitUser && <img src={gitUser?.html_url + '.png'} alt="" />}
      </Avatar>
      <InfoContainer>
        <InfoHeader>
          <h2>{gitUser?.name}</h2>
          <span>
            <a href={gitUser?.html_url} target="_blank" rel="noreferrer">
              Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </span>
        </InfoHeader>
        <InfoDescription>{gitUser?.bio}</InfoDescription>
        <InfoSocialMedia>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {gitUser?.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            {gitUser?.company}
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {gitUser?.followers} seguidores
          </span>
        </InfoSocialMedia>
      </InfoContainer>
    </ProfileContainer>
  )
}
