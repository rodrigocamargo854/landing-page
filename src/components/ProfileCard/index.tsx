import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import * as S from './styles'
import { Author } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'





const ProfileCard: React.FC<Author> = ({
  name,
  role,
  photo,
  description,
}) => (
  <S.Card key={name}>
    <S.Image
    src={getImageUrl(photo.url)}
    alt = {photo.alternativeText}
    />
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
