import styled from "styled-components";

export const OrderInfo = styled.div`
  max-width: 360px;
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  top: 120px;
  margin-left: 7%;
`;

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 0;
`;

export const ProductTitle = styled.h1`
  font-size: 2em;
  margin-bottom: .8rem;
  line-height: 2rem;
  color: #000000;
  margin: 0 0 30px;
  font-weight: 300;
`;

export const OrderDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-family: 'PT Sans';
  margin-bottom: 10px;
`

export const DetailName = styled.div`
  color: '#000';
`

export const DetailValue = styled.div`
  color: '#000';
  opacity: .5;
`

export const DivideLineOrder = styled.div`
  display: block;
  background: #d8d8d8;
  height: 1px;
  width: 100%;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  margin-top: 10px;
`

export const CheckoutBtn = styled.button`
  display: block;
  height: auto;
  font-family: "PT Sans", sans-serif;
  font-size: 1rem;
  font-size: 14px;
  font-weight: 300;
  color: #fff;
  background-color: #000;
  border: 1px solid #171717;
  border-color: #171717;
  padding: 6px 30px;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  text-transform: none;
  text-decoration: none;
  transition: all .2s;
  cursor: pointer;

  &:hover {
    opacity: .7;
  }
`

export const PayBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const PayBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 47%;
  background: transparent;
  border: 1px solid #cccccc;
  border-radius: 2px;

  &:hover {
    border-color: #2e3131;
    cursor: pointer;
  }
`

export const CheckoutMessage = styled.p`
  font-family: 'PT Sans';
  font-size: 13px;
  color:#2e3131;
  text-align: justify;

  span {
    font-weight: 700;
    cursor: pointer;
  }
`
