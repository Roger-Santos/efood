import styled from 'styled-components'

import { Props } from '.'

export const Container = styled.section<Omit<Props, 'title' | 'restaurante'>>`
  padding: 32px 0;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin-top: 40px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
