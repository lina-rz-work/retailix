import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StyledSchoppingCart, CloseBtn, DivideLine, Header, Message, ItemsContainer, CheckoutContainer, TotalContainer, CheckoutBtn } from "./styles";
import { SlidePanel } from "../SlidePanel/SlidePanel";
import { CartItem } from "../CartItem/CartItem";
import { ReactComponent as CrossIcon } from "../../assets/images/icons/cross-svgrepo-com.svg";
import { selectCartItems, selectCartQuantity, selectTotalPrice } from "../../features/cart/cartSelectors";
import { selectCartVisible } from "../../features/uiState/uiStateSelectors";
import { setCartVisible } from "../../features/uiState/uiStateSlice";
import { setActiveMenuItem } from "../../features/navbar/navbarSlice";


export function ShoppingCart() {
  const cartItems = useSelector(selectCartItems);
  const cartQuantity = useSelector(selectCartQuantity);
  const totalPrice = useSelector(selectTotalPrice);
  const cartVisible = useSelector(selectCartVisible);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setCartVisible(false))
    dispatch(setActiveMenuItem(null));
  }

  return (
    <SlidePanel isVisible={cartVisible} onClose={() => dispatch(setCartVisible(false))}>
      
      <StyledSchoppingCart>
        <CloseBtn onClick={() => dispatch(setCartVisible(false))}>
          <CrossIcon />
        </CloseBtn>

        <Header>Shopping bag</Header>
        <DivideLine />
        {cartItems.length === 0 && <Message>You have no items in your bag.</Message>}

        <ItemsContainer>
          {cartItems.map((cartItem, index) => {
            return <CartItem key={index} {...cartItem}/>
          })}
        </ItemsContainer>
      </StyledSchoppingCart>

      <CheckoutContainer>
        <TotalContainer>
          <div>Total: <span>{cartQuantity} {cartQuantity === 1 ? 'item' : 'items'}</span></div>
          <div>${totalPrice}</div>
        </TotalContainer>

        <Link to={"/cart"}>
          <CheckoutBtn onClick={handleClick} disabled={cartItems.length === 0 ? true : false}>
            CHECKOUT
          </CheckoutBtn>
        </Link>
      </CheckoutContainer>
    </SlidePanel>
  )
}
