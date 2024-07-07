import { useState } from "react";
import { StyledDescription, Navigation, NavElem, Description, Reviews} from "./styles";
import { DivideLine } from "../ProductDisplay/styles";
import { ShippingReturns } from "../ShippingReturns/ShippingReturns";
import { ProductDetails } from "../ProductDetails/ProductDetails";
import { ProductProps } from "../../types/product";

export const DescriptionBox: React.FC<ProductProps> = ( product ) => {
  const [ isActive, setIsActive ] = useState('Product Details');

  return (
    <StyledDescription>
      <Description>
        {product.fullDescription}
      </Description>

      <DivideLine />
      <Navigation>
        {['Product Details', 'Shipping and Returns', 'Reviews'].map((item, index) => {
          return (
            <NavElem 
              key={index}
              className={isActive === item ? 'active' : ''} 
              onClick={() => setIsActive(item)}>
              {item}
            </NavElem>
          )
        })}
      </Navigation>

      <div>
        {isActive === 'Product Details' && <ProductDetails {...product}/>}
        {isActive === 'Shipping and Returns' && <ShippingReturns />}
        {isActive === 'Reviews' && <Reviews><p>No reviews yet</p></Reviews>}
      </div>
      <DivideLine />

    </StyledDescription>
  )
}
