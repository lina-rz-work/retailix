import { useSelector } from "react-redux";
import { StyledPopular, PopularHeader, ProductsContainer } from "./styles";
import { Item } from "../Item/Item";
import { RootState } from "../../store/store";

export const Featured: React.FC = () => {
  const allProducts = useSelector((state: RootState) => state.products.allProducts);
  const featured = allProducts.slice(0, 4);

  return (
    <StyledPopular>
      <PopularHeader>Featured for Women</PopularHeader>

      <ProductsContainer>
        {featured.map(product => {
          return <Item key={product.id} {...product}/>
        })}
      </ProductsContainer>
    </StyledPopular>
  )
}
