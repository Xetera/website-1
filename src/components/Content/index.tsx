import React from "react"
import * as SC from "./styles"

export const Content: React.FC = ({ children, ...restProps }) => {
  return <SC.ContentWrapper {...restProps}>{children}</SC.ContentWrapper>
}
