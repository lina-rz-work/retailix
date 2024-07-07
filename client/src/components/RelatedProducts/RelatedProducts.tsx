import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { StyledRelatedProd, ProductsContainer, RelatedHeader } from "./styles";
import { Item } from "../Item/Item";
import { getRelatedProducts } from "../../utilities/getRelatedProducts";
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
