import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCartItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  font-family: "PT Sans",sans-serif;
  font-size: 14px;
  margin-bottom: 1.4rem;
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

export const StyledLink = styled(Link)`
  max-width: 125px;
  width: 100%;
  height: 160px;
  max-height: 400px;
  margin-right: 10px;
  cursor: pointer;
`

export const CartImage = styled.img`
  max-width: 125px;
  width: 100%;
  height: 160px;
  max-height: 400px;
  object-fit: cover;
  margin-right: 10px;
  cursor: pointer;
`

export const ProdName = styled.div`
  font-size: 16px;
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
  margin-bottom: 20px;
`

export const Param = styled.div`
  width: 50%;
  margin-bottom: 4px;
`

export const RemoveBtn = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background: transparent;
  border: 0;
  cursor: pointer;

  svg {
    width: 12px;
    height: 12px;
  }
`

export const QtyPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #000;
`

export const QtyContainer = styled.div`
  color: #000;
`

export const DecreaseBtn = styled.button`
  background-color: transparent;
  border: 0;
  padding: 0 10px;
  margin-left: 10px;
  cursor: pointer;
`

export const IncreaseBtn = styled.button`
  background-color: transparent;
  border: 0;
  padding: 0 10px;
  margin-right: 15px;
  cursor: pointer;
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const OldPrice = styled.div`
  font-size: 15px;
  color: #8c8c8c;
  text-decoration: line-through;
  margin-right: 10px;
`

export const NewPrice = styled.div`
  font-size: 15px;
  color: #000;
`