import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { StyledCartItem, ProductInfo, StyledLink, CartImage, ProdName, Price, Details, Param } from "./styles";
import { RemoveBtn, QtyContainer, DecreaseBtn, IncreaseBtn } from "./styles";
import { ReactComponent as CrossIcon} from "../../assets/images/icons/cross-svgrepo-com.svg";
import { increaseItemQuantity, decreaseItemQuantity, removeCartItem } from "../../features/cart/cartSlice";
import { increaseItemQuantityServer, decreaseItemQuantityServer, removeCartItemServer } from "../../features/cart/cartSlice";
import { setActiveMenuItem } from "../../features/navbar/navbarSlice";
import { setCartVisible } from "../../features/uiState/uiStateSlice";
import { RootState, AppDispatch } from "../../store/store";

type CartItemProps = {
  id: number,
  quantity: number,
  size: string,
}

export const CartItem: React.FC<CartItemProps> = ({ id, quantity, size }) => {
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

  const handleLinkClick = () => {
    dispatch(setActiveMenuItem(prod.category));
    dispatch(setCartVisible(false));
  }

  return (
    <StyledCartItem>
      <StyledLink to={`/product/${prod.id}`}>
        <CartImage src={prod.images[0].url} alt="" onClick={handleLinkClick}/>
      </StyledLink>

      <ProductInfo>
        <ProdName onClick={handleLinkClick}>
          <Link to={`/product/${prod.id}`}>{prod.name}</Link>
        </ProdName>
        <Price>${prod.newPrice}</Price>

        <Details>
          {['Size', `${size}`, 
            'Style #:', `${prod.style.slice(3)}`, 
            'Color', `${prod.color}`].map((param, index) => (
            <Param key={index}>{param}</Param>
          ))}
        </Details>

        <QtyContainer>
          Quantity:
          <DecreaseBtn onClick={handleDecreaseItem}>-</DecreaseBtn>
          {quantity}
          <IncreaseBtn onClick={handleIncreaseItem}>+</IncreaseBtn>
        </QtyContainer>
      </ProductInfo>

      <RemoveBtn onClick={handleRemoveItem}>
        <CrossIcon />
      </RemoveBtn>
      
    </StyledCartItem>
  )
}
