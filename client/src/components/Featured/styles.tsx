import styled from "styled-components";

export const StyledPopular = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-height: max-content;
  margin-bottom: 150px;
`

export const PopularHeader = styled.h1`
  color: #171717;
  font-size: 50px;
  font-weight: 400;
  font-family: "Bodoni Cyrillic";
  align-self: start;
  margin-left: 150px;
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  padding: 0 150px;
`
