import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCartItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  font-family: "PT Sans",sans-serif;
  font-size: 14px;
  margin-bottom: 0.8rem;
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-left: 20px;
`

export const StyledLink = styled(Link)`
  max-width: 85px;
  width: 100%;
  height: 120px;
  max-height: 400px;
  margin-right: 10px;
  cursor: pointer;
`

export const CartImage = styled.img`
  max-width: 85px;
  width: 100%;
  height: 120px;
  max-height: 400px;
  object-fit: cover;
  margin-right: 10px;
  cursor: pointer;
`

export const ProdName = styled.div`
  font-size: 15px;
  margin-bottom: 5px;
  
  a {
    text-decoration: none;
    color: #000;
  }

  :hover {
    opacity: .5;
  }
`

export const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 13px;
  color: rgb(46, 49, 49);
  /* margin-bottom: 15px; */
`

export const Param = styled.div`
  width: 50%;
  margin-bottom: 4px;
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: end;
`

export const NewPrice = styled.div`
  font-size: 15px;
  color: #000;
`
