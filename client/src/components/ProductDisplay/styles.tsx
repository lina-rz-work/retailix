import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "PT Sans",sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #2e3131;
  margin-bottom: 30px;
`

export const ImageGallery = styled.div`
  display: flex;

  img {
    object-position: top;
    width: 320px;
    height: 100%;
    max-height: 400px;
    object-fit: cover;
    margin-right: 10px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 320px;
  width: 100%;
  margin-left: 50px;
`;

export const ProductTitle = styled.h1`
  font-family: "Bodoni Cyrillic";
  font-size: 2em;
  margin-bottom: .8rem;
  line-height: 2rem;
  color: #000000;
  margin: 0 0 20px;
  font-weight: 300;
`;

export const ProductDescription = styled.p`
  text-align: justify;
  margin: 10px 0;
`;

export const DivideLine = styled.div`
  display: block;
  background: #eee;
  height: 1px;
  width: 100%;
  margin-bottom: 1.4rem;
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

export const OldPrice = styled.span`
  color: #a4a4a4;
  text-decoration: line-through;
  margin-right: 10px;
`;

export const NewPrice = styled.span`
  color: #000;
`;

export const Color = styled.div`
  font-family: "PT Sans", sans-serif;
  margin-bottom: 30px;
`

export const AddToCartButton = styled.button`
  width: 100%;
  font-size: 18px;
  color: #000000;
  border: 1px solid #000000;
  font-family: Futura PT;
  font-weight: 300;
  height: auto;
  padding: 7px 30px;
  display: block;
  text-align: center;
  background-color: transparent;
  font-size: 1rem;
  text-transform: none;
  text-decoration: none;
  transition: all .2s;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #000000f2;
  }
`

export const ShippingInfo = styled.p`
  font-size: 13px;
`
