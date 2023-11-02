import {
  Avatar,
  InfoContainer,
  InfoDescription,
  InfoHeader,
  InfoSocialMedia,
  ProfileContainer,
} from './styled'

import avatarImg from '../../../../assets/avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar>
        <img src={avatarImg} alt="" />
      </Avatar>
      <InfoContainer>
        <InfoHeader>
          <h2>Cameron Williamson</h2>
          <span>
            <a href="/">
              Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </span>
        </InfoHeader>
        <InfoDescription>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </InfoDescription>
        <InfoSocialMedia>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            cameronwll
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            32 Seguidores
          </span>
        </InfoSocialMedia>
      </InfoContainer>
    </ProfileContainer>
  )
}
