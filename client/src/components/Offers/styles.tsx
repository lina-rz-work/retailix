import styled from "styled-components";

export const StyledOffers = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  padding: 0 50px;
  padding-left: 150px;
  background-size: 120%;
  background-repeat: no-repeat;
  background-image: url('/images/backgrounds/full-shot-kids-sitting-grass.jpg');
  background-position-y: 75%;
  margin-bottom: 70px;

  button {
    align-self: start;
  }

  @media(max-width: 1024px) {
    height: 60vh;
    padding: 0 40px;
    background-size: 140%;
    background-position-x: 25%;
    background-position-y: 80%;
  }

  @media(max-width: 800px) {
    background-size: 160%;
  }

  @media(max-width: 500px) {
    justify-content: space-between;
    padding: 0 20px;
    background-size: 210%;
    background-position-x: 35%;


    button {
      margin-bottom: 40px;
    }
  }

  @media(max-width: 350px) {
    height: 50vh;
    padding: 0 10px;

    button {
      margin-bottom: 30px;
    }
  }
`

export const OffersHeader = styled.h1`
  color: rgb(255, 255, 255);
  font-size: 45px;
  font-family: "Bodoni Cyrillic";
  font-weight: 400;
  margin-top: 60px;
  margin-bottom: 50px;

  @media(max-width: 1020px) {
    font-size: 43px;
  }

  @media(max-width: 800px) {
    font-size: 35px;
  }

  @media(max-width: 500px) {
    font-size: 30px;
  }

  @media(max-width: 350px) {
    font-size: 27px;
  }
`

