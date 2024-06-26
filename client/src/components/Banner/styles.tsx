import styled, { css } from "styled-components";

interface StyledBannerProps {
  category: string;
  header: string;
  imgUrl: string;
}

export const StyledBanner = styled.div<StyledBannerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;
  padding-left: 150px;
  height: 60vh;
  height: 60vh;
  background-repeat: no-repeat;
  margin-bottom: 60px;
  
  ${props => props.category === 'kids' && css`
    background-size: 120%;
    background-image: url('/images/backgrounds/full-shot-kids-walking-together.jpg');
    background-position-y: -320px;
  `}

  ${props => props.category === 'women' && css`
    background-size: 170%;
    background-image: url('/images/backgrounds/full-shot-happy-family-nature.jpg');
    background-position-y: -260px;
  `}

  ${props => props.category === 'men' && css`
    background-size: 100%;
    background-image: url('/images/backgrounds/medium-shot-smiley-man-with-crossed-arms.jpg');
    background-position-y: -130px;
  `}

  button {
    align-self: start;
  }
`

export const BannerHeader = styled.h1`
  color: rgb(255, 255, 255);
  font-size: 45px;
  font-family: "Bodoni Cyrillic";
  font-weight: 400;
  margin-top: 60px;
  margin-bottom: 50px;
`

