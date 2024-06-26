import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCartItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  font-family: "PT Sans",sans-serif;
  font-size: 13px;
  margin-bottom: 10px;
`

export const ProductInfo = styled.div`
  width: 100%;
`

export const StyledLink = styled(Link)`
  max-width: 95px;
  width: 100%;
  height: 125px;
  max-height: 400px;
  margin-right: 10px;
  cursor: pointer;
`

export const CartImage = styled.img`
  max-width: 95px;
  width: 100%;
  height: 125px;
  max-height: 400px;
  object-fit: cover;
  margin-right: 10px;
  cursor: pointer;
`

export const ProdName = styled.div`
  margin-bottom: 5px;
  
  a {
    text-decoration: none;
    color: #2E3131;
  }

  :hover {
    opacity: .5;
  }
`

export const Price = styled.div`
  font-size: 14px;
  color: #000;
  margin-bottom: 12px;
`

export const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  color: rgb(46, 49, 49);
`

export const Param = styled.div`
  width: 50%;
  margin-bottom: 3px;
`

export const RemoveBtn = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background: transparent;
  border: 0;
  cursor: pointer;

  svg {
    width: 11px;
    height: 11px;
  }
`

export const DivideLine = styled.div`
  display: block;
  background: #eee;
  height: 1px;
  width: 100%;
  opacity: .5;
`

export const QtyContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  color: #2E3131;
`

export const DecreaseBtn = styled.button`
  background-color: transparent;
  border: 0;
  padding: 0 10px;
  margin-left: 81px;
  cursor: pointer;
`

export const IncreaseBtn = styled.button`
  background-color: transparent;
  border: 0;
  padding: 0 10px;
  margin-right: 15px;
  cursor: pointer;
`
