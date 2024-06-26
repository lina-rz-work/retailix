import { useState } from "react";
import { StyledDescription, Navigation, NavElem, Description, Reviews} from "./styles";
import { ShippingReturns } from "../ShippingReturns/ShippingReturns";
import { ProductDetails } from "../ProductDetails/ProductDetails";
import { DivideLine } from "../ProductDisplay/styles";
import { ProductProps } from "../../types/product";


export const DescriptionBox: React.FC<ProductProps> = ( product ) => {
  const [ isActive, setIsActive ] = useState('Product Details');

  return (
    <StyledDescription>
      <Description>
        {product.fullDescription}
        {/* A lightweight, straight-fit top with thin straps, side ties and an asymmetrical hem, 
        crafted from a body-friendly textured fabric and paired with a matching maxi skirt.
        Lightweight, smooth material that is durable and wear-resistant. It is pleasant to 
        the touch, breathable, does not wrinkle and is easy to care for. */}
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
