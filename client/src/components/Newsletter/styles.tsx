import styled from "styled-components";

export const StyledNewsletter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 0 50px;
  background-image: url('/images/backgrounds/full-shot-kids-sitting-grass.jpg');
  height: 60vh;
  margin-bottom: 60px;
  background-size: 230%;
  background-repeat: no-repeat;
  background-position-y: 61%;

  @media(max-width: 1024px) {
    padding: 0 40px;
  }

  @media(max-width: 800px) {
    /* background-size: 160%; */
  }

  @media(max-width: 500px) {
    padding: 0 20px;
    background-size: 270%;
    background-position-y: bottom;
  }

  @media(max-width: 350px) {
    padding: 0 10px;
    background-size: 360%;
    background-position-y: bottom;
  }
`

export const NewsletterHeader = styled.h1`
  text-align: center;
  color: rgb(255, 255, 255);
  margin: 0px 0px 50px;
  font-size: 45px;
  font-family: "Bodoni Cyrillic";
  font-weight: 400;
  margin: 60px 0 0;

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
    margin-top: 30px;
    font-size: 27px;
  }
`

export const NewsletterDescription = styled.p`
  width: 35%;
  color: white;
  font-family: "Bodoni Cyrillic";
  font-size: 16px;
  text-align: center;
  margin-bottom: 50px;

  @media(max-width: 1284px) {
    width: 50%;
  }

  @media(max-width: 1024px) {
    width: 50%;
  }

  @media(max-width: 800px) {
    width: 80%;
  }

  @media(max-width: 500px) {
    width: 100%;
  }

  @media(max-width: 350px) {
    font-size: 15px;
    width: 100%;
  }
`

export const NewsletterInput = styled.input`
  width: 27%;
  margin-bottom: 20px;
  padding: 4px 10px;
  background: transparent;
  border: 0;
  border-bottom: 1px solid white;
  color: #fff;
  outline: none;

  &::placeholder {
    color: #ffffff78;
    font-family: "Bodoni Cyrillic";
    font-size: 16px;
  }

  &:focus {
    backdrop-filter: brightness(0.5);
  }

  &:focus::placeholder {
    color: #ffffff78;
    font-family: "Bodoni Cyrillic";
    font-size: 16px;
  }

  @media(max-width: 800px) {
    width: 50%;
  }

  @media(max-width: 500px) {
    width: 80%;
  }

  @media(max-width: 350px) {
    width: 90%;
  }
`
