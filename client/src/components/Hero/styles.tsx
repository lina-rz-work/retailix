import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-image: url(/images/backgrounds/full-shot-family-sitting-grass-together.jpg);
  background-position: center;
  background-size: cover;
  margin-bottom: 40px;

  a {
    margin: 0px 0px 76px 0px;
    align-self: center;
  }

  @media (max-width: 800px) {
    background-position-x: 54%;
  }

  @media (max-width: 500px) {
    background-image: url(/images/backgrounds/full-shot-family-sitting-grass-together1.jpg);
    background-position-x: 54%;
    background-position-y: bottom;
    a {
      margin: 0px 0px 96px 0px;
    }
  }

  @media (max-width: 350px) {
    height: 90vh;
  }
`

export const HeroHeader = styled.h2`
  color: rgb(255, 255, 255);
  margin: 0px 0px 50px;
  font-size: 55px;
  align-self: center;
  text-align: center;
  font-family: "Bodoni Cyrillic";
  font-weight: 400;
  margin-top: 100px;

  @media(max-width: 800px) {
    font-size: 50px;
  }

  @media(max-width: 500px) {
    margin-top: 120px;
    font-size: 45px;
  }

  @media(max-width: 350px) {
    font-size: 40px;
  }
`

