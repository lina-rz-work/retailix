import { StyledProductDetails, DetailsList, Detail } from "./styles";
import { ProductProps } from "../../types/product";

export const ProductDetails: React.FC<ProductProps> = ( product ) => {

  const formattedDetail = ([ key, value ]: [ string, string | undefined]): string => {
    const reg = /([a-z])([A-Z])/g;
    if(key.match(reg)) {
      key = key.replace(reg, '$1 $2').toLowerCase();
    }

    const res = key.slice(0, 1).toUpperCase() + key.slice(1) + ': ' + value;
    return res;
  }

  return (
    <StyledProductDetails>
      <DetailsList>
        {Object.entries(product.specifications).map((detail, index) => {
          return <Detail key={index}>{formattedDetail(detail)}</Detail>
        })}
      </DetailsList>
      <p>Style #: {product.style}</p>
    </StyledProductDetails>
  )
}
