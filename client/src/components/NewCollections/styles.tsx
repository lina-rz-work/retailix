import styled from "styled-components";

export const StyledNewCollections = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-height: max-content;
  margin-bottom: 150px;
`

export const CollectionsHeader = styled.h1`
  font-size: 45px;
  font-weight: 700;
  font-family: "Bodoni Cyrillic";
  color: #171717;
`

export const CollectionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  row-gap: 50px;
  padding: 0 150px;

  img {
    width: 100%;
  }
`


