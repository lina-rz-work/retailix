import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SizeBox } from "../SizeBox/SizeBox";
import { ProductContainer, ImageGallery, ProductInfo, ProductTitle, ProductDescription, DivideLine, PriceContainer, OldPrice, NewPrice, Color, AddToCartButton, ShippingInfo } from "./styles";
import { increaseItemQuantity, increaseItemQuantityServer } from "../../features/cart/cartSlice";
import { setCartVisible } from "../../features/uiState/uiStateSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { ProductProps } from "../../types/product";

export const ProductDisplay: React.FC<ProductProps> = ( product ) => {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const [ size, setSize ] = useState<string | null>(null);
  const [ warnMessage, setWarnMessage ] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const location = useLocation();

  function setSelectedSize(value: string): void {
    setSize(value);
  }

  function setWarningMessage(value: boolean): void {
    setWarnMessage(value);
  }

  function addToCart() {
    if (size) {
      const id = product.id;

      if (isAuthenticated) {
        dispatch(increaseItemQuantityServer({ id, size }));
      } else {
        dispatch(increaseItemQuantity({ id, size }));
      }

      setTimeout(() => dispatch(setCartVisible(true)), 300);
      return;
    }
    setWarnMessage(true);
  }

  useEffect(() => {
    setSize(null);
    setWarnMessage(false);
  },[location.pathname]);

  return (
    <ProductContainer>
      <ImageGallery>
        <img src={product.images[0].url} alt={product.name} />
        <img src={product.images[1].url} alt={product.name} />
      </ImageGallery>

      <ProductInfo>
        <div>
          <ProductTitle>{product.name}</ProductTitle>
          
          <DivideLine />
          <ProductDescription>{product.description}</ProductDescription>

          <PriceContainer>
            <OldPrice>${product.oldPrice.toFixed(2)}</OldPrice>
            <NewPrice>${product.newPrice.toFixed(2)}</NewPrice>
          </PriceContainer>

          <Color>{product.color}</Color>
        </div>

        
        <div>
          <DivideLine />
          <SizeBox
            selectedSize={size}
            warnMessage={warnMessage}
            setSelectedSize={setSelectedSize} 
            setWarningMessage={setWarningMessage}
          />

          <AddToCartButton onClick={addToCart}>Add to Cart</AddToCartButton>

          <ShippingInfo>Free Standard Shipping on $75+</ShippingInfo>
        </div>
      </ProductInfo>

    </ProductContainer>
  );
}
