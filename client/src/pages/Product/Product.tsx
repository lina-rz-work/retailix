import { useParams } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { StyledProduct } from "./stlyles";
import { ProductDisplay } from "../../components/ProductDisplay/ProductDisplay";
import { DescriptionBox } from "../../components/DescriptionBox/DescriptionBox";
import { RelatedProducts } from "../../components/RelatedProducts/RelatedProducts";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const Product: React.FC = () => {
  const allProducts = useSelector((state: RootState) => state.products.allProducts);
  const { productId } = useParams();
  const product = allProducts.find(product => product.id === Number(productId));
  if (!product) {
    return null;
  }

  return (
    <>
      <StyledProduct>
        <Breadcrumbs {...product}/>
        <ProductDisplay {...product}/>
        <DescriptionBox {...product}/>
      </StyledProduct>
        <RelatedProducts category={ product.category }/>
    </>
  )
}
