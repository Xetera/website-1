import styled from "styled-components"

export const ContainerWrapper = styled.div`
  width: 650px;
  /* width: calc(650px - 128px); */
  max-width: calc(100% - 128px);
  padding: 0px 64px;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    width: calc(100% - 128px);
  }
`
