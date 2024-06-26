import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-image: url(/images/backgrounds/full-shot-family-sitting-grass-together.jpg);
  background-position-y: 68%;
  background-size: cover;
  margin-bottom: 40px;

  button {
    margin: 0px 0px 76px 0px;
    align-self: center;
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
`

