import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { SectionConceptsProps } from 'types/api'

const SectionConcepts = ({concepts,title}:SectionConceptsProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom>Conceitos que você irá aprender</Heading>
      <S.List>
        {concepts.map((item) => (
          <S.Item key={title}>{item.title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
