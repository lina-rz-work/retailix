import styled from "styled-components"

export const StyledRelatedProd = styled.div`
  margin-bottom: 100px;
`

export const RelatedHeader = styled.h3`
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  margin: 0 0 40px;
  text-transform: uppercase;
  font-family: "PT Sans", sans-serif;
  color: rgb(46, 49, 49);
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 30px;

  img {
    width: 100%;
  }
`
