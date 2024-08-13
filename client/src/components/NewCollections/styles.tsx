import styled from "styled-components";

export const StyledNewCollections = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-height: max-content;
  margin-bottom: 150px;

  @media(max-width: 500px) {
    margin-bottom: 130px;
  }
`

export const CollectionsHeader = styled.h1`
  font-size: 45px;
  font-weight: 700;
  font-family: "Bodoni Cyrillic";
  color: #171717;


  @media(max-width: 1024px) {
    font-size: 43px;
  }

  @media(max-width: 800px) {
    font-size: 37px;
  }

  @media(max-width: 500px) {
    font-size: 37px;
  }

  @media(max-width: 500px) {
    font-size: 30px;
  }

  @media(max-width: 350px) {
    font-size: 25px;
  }
`

export const CollectionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  row-gap: 50px;
  /* padding: 0 150px; */

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


