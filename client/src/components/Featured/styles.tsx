import styled from "styled-components";

export const StyledPopular = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-height: max-content;
  margin-bottom: 150px;

  @media(max-width: 500px) {
    margin-bottom: 120px;
  }
`

export const PopularHeader = styled.h1`
  color: #171717;
  font-size: 50px;
  font-weight: 400;
  font-family: "Bodoni Cyrillic";
  align-self: start;
  margin-left: 150px;

  @media(max-width: 1284px) {
    margin-left: 100px;
  }

  @media(max-width: 1024px) {
    margin-left: 50px;
    font-size: 45px;
  }

  @media(max-width: 800px) {
    margin-left: 40px;
    font-size: 40px;
  }

  @media(max-width: 500px) {
    margin-left: 30px;
    font-size: 40px;
  }

  @media(max-width: 500px) {
    margin-left: 25px;
    font-size: 33px;
  }

  @media(max-width: 350px) {
    margin-left: 20px;
    font-size: 28px;
  }
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  row-gap: 50px;
  // padding: 0 150px;

  @media(max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 40px;
    padding: 0;
  }

  @media(max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width: 350px) {
    grid-template-columns: 1fr;
    row-gap: 30px;
  }
`
