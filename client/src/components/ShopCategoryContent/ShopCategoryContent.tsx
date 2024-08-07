import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { StyledShopContent, CategoryHeader, ProductsContainer, ShowMoreButton, SortCategory, SortCategoryLeft } from "./styles";
import { StyledLoader, Spinner } from "./styles";
import { SortOptions } from "../../components/SortOptions/SortOptions";
import { Item } from "../../components/Item/Item";
import { RootState } from "../../store/store";
import { ProductProps } from "../../types/product";

interface ShopCategoryProps {
  category: string;
}

const headers = [
  { category: 'women', header: `Women's Clothing`},
  { category: 'men', header: `Men's Clothing`},
  { category: 'kids', header: `Kid's Clothing`}
];

export const ShopCategoryContent: React.FC<ShopCategoryProps> = ({ category }) => {
  const allProducts = useSelector((state: RootState) => state.products.allProducts);
  const categoryHeader = headers.find(header => header.category === category)?.header;
  const categoryProducts = allProducts.filter(product => product.category === category);
  const [loaderVisible, setLoaderVisible] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    if (!isSorted) {
      return;
    }

    let isMounted = true;
    setLoaderVisible(true);

    const imagePromises = products.map(product => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(undefined);
        img.onerror = () => reject();
        img.src = product.images[0].url;
      });
    });

    Promise.all([...imagePromises])
      .then(() => {
        setTimeout(() => {
          if (isMounted) {
            setLoaderVisible(false);
          }
        }, 500);
      })
      .catch(err => {
        if (isMounted) {
          setLoaderVisible(false);
          console.error('Failed to load image:', err);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [products]);

  useEffect(() => {
    setProducts(categoryProducts);
  }, [allProducts]);

  function sortProducts(value: string): void {
    if (value === 'unsorted') {
      setProducts(categoryProducts);
    }
    if (value === 'priceAsc') {
      const sorted = [...categoryProducts].sort((a, b) => {
        return a.newPrice - b.newPrice;
      })
      setProducts(sorted);
    }
    if (value === 'priceDesc') {
      const sorted = [...categoryProducts].sort((a, b) => {
        return b.newPrice - a.newPrice;
      })
      setProducts(sorted);
    }
  }

  function setSorted(value: boolean): void {
    setIsSorted(value);
  }

  return (
    <StyledShopContent id="shop_category">
      <CategoryHeader>{categoryHeader}</CategoryHeader>

      <SortCategory>
        <SortCategoryLeft><span>Showing 1-12</span> out of 36 products</SortCategoryLeft>
        <SortOptions sortProducts={sortProducts} setSorted={setSorted}/>
      </SortCategory>

      <ProductsContainer>
        {products.map((product, index) => {
          return <Item key={index} {...product}></Item>
        })}
      </ProductsContainer>

      <ShowMoreButton disabled={true}>SHOW MORE</ShowMoreButton>
    </StyledShopContent>
  )
}
