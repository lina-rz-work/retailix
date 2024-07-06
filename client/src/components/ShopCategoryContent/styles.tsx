import styled, { keyframes } from "styled-components";

export const StyledShopContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "PT Sans", sans-serif;
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

export const SortCategoryLeft = styled.p`
  span {
    font-weight: 600;
  }
`

export const ProductsContainer = styled.div`
  position: relative;
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


export const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding-bottom: 90%;
  z-index: 1;
`;

export const Spinner = styled.div`
  font-family: "PT Sans", sans-serif;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-left-color: #6b6b6b;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  animation: ${spinAnimation} 1s linear infinite;
`;


