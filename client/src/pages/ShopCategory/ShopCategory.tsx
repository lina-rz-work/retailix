import { StyledShopCategory, CategoryHeader, ProductsContainer, ShowMoreButton } from "./styles";
import { SortCategory, SortCategoryLeft, SortCategoryRight } from "./styles";
import { Banner } from "../../components/Banner/Banner";
import { Item } from "../../components/Item/Item";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface ShopCategoryProps {
  category: string;
}

export const ShopCategory: React.FC<ShopCategoryProps> = ({ category }) => {
  const allProducts = useSelector((state: RootState) => state.products.allProducts);
  const headers = [
    { category: 'women', header: `Women's Clothing`},
    { category: 'men', header: `Men's Clothing`},
    { category: 'kids', header: `Kid's Clothing`}
  ];
  const categoryHeader = headers.find(header => header.category === category)?.header;

  return (
    <div>
      <Banner category={category} />

      <StyledShopCategory>
        <CategoryHeader>{categoryHeader}</CategoryHeader>

        <SortCategory>
          <SortCategoryLeft><span>Showing 1-12</span> out of 36 produts</SortCategoryLeft>
          <SortCategoryRight>Sort by v</SortCategoryRight>
        </SortCategory>

        <ProductsContainer>
          {allProducts.map(product => {
            if (product.category === category) {
              return <Item {...product}></Item>
            }
          })}
        </ProductsContainer>

        <ShowMoreButton>SHOW MORE</ShowMoreButton>
      </StyledShopCategory>
    </div>
  )
}
