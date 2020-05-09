import { transparentize } from "polished"
import styled from "styled-components"
import { fontFamily, modularScale } from "../../design/typography"
import { WavesTop, WavesBottom } from "../Waves"
import Circles from "../../images/circles.svg"

export const HeaderWrapper = styled.div`
  width: calc(100% - 305px);
  padding-right: 305px;
  height: 391px;
  padding-top: 67px;
  position: relative;

  @media screen and (max-width: 1200px) {
    width: 100%;
    padding-right: 0;
  }

  @media screen and (max-width: 767px) {
    padding-right: 0;
  }
`

export const BackgroundWrapper = styled.div`
  height: 391px;
  padding-top: 67px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const StyledCircles = styled(Circles)`
  position: absolute;
  top: 50%;
  margin-top: -200px;
`

export const StyledWavesTop = styled(WavesTop)`
  opacity: ${props => (props.theme.name === "dark" ? 0.8 : 0.2)};
  top: -10%;
  transform: scaleX(-1);
`

export const StyledWavesBottom = styled(WavesBottom)`
  opacity: ${props => (props.theme.name === "dark" ? 0.8 : 0.2)};
  bottom: -30%;
  transform: scaleX(-1);
`

export const Box = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: absolute;
  bottom: 40px;
  margin-left: -16px;
  background: ${props => transparentize(0.3, props.theme.main.background)};
  padding: 16px;
  backdrop-filter: blur(14px);
  max-width: calc(100% - 304px - 32px - 32px - 80px);

  @media screen and (max-width: 1200px) {
    max-width: 100%;
    left: 32px;
    right: 32px;
    margin-left: 0;
  }
`

export const Title = styled.h1`
  font-family: ${fontFamily.header};
  font-size: ${modularScale(6).fontSize}px;
  line-height: ${modularScale(6).lineHeight}px;
  letter-spacing: -1.75px;
  margin-top: 0;
  margin-bottom: 16px;
`
