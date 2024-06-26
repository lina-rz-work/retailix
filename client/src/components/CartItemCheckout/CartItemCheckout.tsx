import { StyledCartItem, ProductInfo, StyledLink, CartImage, ProdName, Details, Param, QtyPriceContainer } from "./styles";
import { QtyContainer, DecreaseBtn, IncreaseBtn, PriceContainer, OldPrice, NewPrice, RemoveBtn  } from "./styles";
import { ReactComponent as CrossIcon} from "../../assets/images/icons/cross-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increaseItemQuantity, decreaseItemQuantity, removeCartItem } from "../../features/cart/cartSlice";
import { increaseItemQuantityServer, decreaseItemQuantityServer, removeCartItemServer } from "../../features/cart/cartSlice";
import { setActiveMenuItem } from "../../features/navbar/navbarSlice";
import { RootState, AppDispatch } from "../../store/store";

type CartItemProps = {
  id: number,
  quantity: number,
  size: string,
}

export const CartItemCheckout: React.FC<CartItemProps> = ({ id, quantity, size }) => {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const allProducts = useSelector((state: RootState) => state.products.allProducts);
  const dispatch: AppDispatch = useDispatch();

  const prod = allProducts.find(prod => prod.id === id);
  if (!prod) {
    return null;
  }

  const handleIncreaseItem = () => {
    if (isAuthenticated) {
      dispatch(increaseItemQuantityServer({ id, size }));
    } else {
      dispatch(increaseItemQuantity({ id, size }));
    }
  };
 
  const handleDecreaseItem = () => {
    if (isAuthenticated) {
      dispatch(decreaseItemQuantityServer({ id, size }));
    } else {
      dispatch(decreaseItemQuantity({ id, size }));
    }
  };

  const handleRemoveItem = () => {
    if (isAuthenticated) {
      dispatch(removeCartItemServer({ id, size }));
    } else {
      dispatch(removeCartItem({ id, size }));
    }
  };

  return (
    <StyledCartItem>
      <StyledLink to={`/product/${prod.id}`}>
        <CartImage src={prod.images[0].url} alt="" onClick={() => dispatch(setActiveMenuItem(prod.category))}/>
      </StyledLink>

      <ProductInfo>
        <ProdName onClick={() => dispatch(setActiveMenuItem(prod.category))}>
          <Link to={`/product/${prod.id}`}>{prod.name}</Link>
        </ProdName>

        <Details>
          {['Size', `${size}`, 
            'Style #:', `${prod.style.slice(3)}`, 
            'Color', `${prod.color}`].map((param, index) => (
            <Param key={index}>{param}</Param>
          ))}
        </Details>

        <QtyPriceContainer>
          <QtyContainer>
            Quantity:
            <DecreaseBtn onClick={handleDecreaseItem}>-</DecreaseBtn>
            {quantity}
            <IncreaseBtn onClick={handleIncreaseItem}>+</IncreaseBtn>
          </QtyContainer>

          <PriceContainer>
            <OldPrice>${(prod.oldPrice * quantity).toFixed(2)}</OldPrice>
            <NewPrice>${(prod.newPrice * quantity).toFixed(2)}</NewPrice>
          </PriceContainer>
        </QtyPriceContainer>

      </ProductInfo>

      <RemoveBtn onClick={handleRemoveItem}>
        <CrossIcon />
      </RemoveBtn>
      
    </StyledCartItem>
  )
}
