import React from "react"

import * as SC from "./styles"
import { Container } from "../Container"

interface IHeaderBareboneProps {
  above?: React.ReactNode
  title: string
  content: React.ReactNode
}

export const HeaderBarebone: React.FC<IHeaderBareboneProps> = props => {
  return (
    <SC.HeaderWrapper>
      <SC.BackgroundWrapper>
        <SC.StyledWavesBottom />
        <SC.StyledWavesTop />
        <SC.StyledCircles />
      </SC.BackgroundWrapper>

      <Container>
        <SC.Box>
          {props.above}

          <SC.Title>{props.title}</SC.Title>

          {props.content}
        </SC.Box>
      </Container>
    </SC.HeaderWrapper>
  )
}
