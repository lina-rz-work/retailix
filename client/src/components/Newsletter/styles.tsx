import styled from "styled-components";

export const StyledNewsletter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 0 50px;
  background-image: url('/images/backgrounds/full-shot-kids-sitting-grass.jpg');
  height: 60vh;
  height: 60vh;
  margin-bottom: 60px;
  /* background-size: 120%;
  background-repeat: no-repeat;
  background-position-y: -270px; */

  background-size: 230%;
  background-repeat: no-repeat;
  background-position-y: -1030px;
`

export const NewsletterHeader = styled.h1`
  color: rgb(255, 255, 255);
  margin: 0px 0px 50px;
  font-size: 45px;
  font-family: "Bodoni Cyrillic";
  font-weight: 400;
  margin: 60px 0 0;
`

export const NewsletterDescription = styled.p`
  color: white;
  font-family: "Bodoni Cyrillic";
  font-size: 16px;
  text-align: center;
  margin-bottom: 50px;
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
`
