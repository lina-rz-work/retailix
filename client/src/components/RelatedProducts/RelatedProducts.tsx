import { Item } from "../Item/Item";
import { StyledRelatedProd, ProductsContainer, RelatedHeader } from "./styles";
// import allProducts from "../../data/all_products.json";
import { useParams } from "react-router-dom";

import { getRelatedProducts } from "../../utilities/getRelatedProducts";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface RelatedProductsProps {
  category: string
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ( { category } ) => {
  const { productId } = useParams();
  const allProducts = useSelector((state: RootState) => state.products.allProducts);
  const categoryProducts = allProducts.filter(prod => prod.category === category && prod.id !== Number(productId));
  const relatedProducts = getRelatedProducts(categoryProducts, 5);

  return  (
    <StyledRelatedProd>
      <RelatedHeader>NEW ARRIVALS IN THIS CATEGORY</RelatedHeader>
      <ProductsContainer>
        {relatedProducts.map(item => {
          return <Item key={item.id} {...item}/>
        })}
      </ProductsContainer>
    </StyledRelatedProd>
  )
}
