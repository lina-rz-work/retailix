import styled from "styled-components";

export const StyledShopCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "PT Sans", sans-serif;
  max-height: max-content;
  margin-bottom: 110px;
`

export const CategoryHeader = styled.h1`
  color: #171717;
  font-size: 40px;
  align-self: start;
  padding: 0 150px;
  margin-top: 0;
  margin-bottom: 0;
  font-family: "Bodoni Cyrillic";
`

export const SortCategory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: normal;
  margin: 0 150px;
`

export const SortCategoryRight = styled.div`
  /* padding: 5px 15px; */
  /* border-radius: 40px; */
  /* border: 1px solid #888; */
`

export const SortCategoryLeft = styled.p`
  span {
    font-weight: 600;
  }
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  row-gap: 70px;
  margin: 0px 150px;
  margin-bottom: 50px;
`

export const ShowMoreButton = styled.button`
  color: #171717;
  max-width: max-content;
  font-family: Futura PT;
  font-weight: 300;
  border-color: #171717;
  height: auto;
  padding: 5px 30px;
  display: block;
  border: 1px solid #171717;
  /* border: 0px solid #171717; */
  text-align: center;
  background-color: transparent;
  font-size: 1rem;
  text-transform: none;
  text-decoration: none;
  transition: all .2s;
  cursor: pointer;

  &:hover {
    opacity: .5;
  }
`
