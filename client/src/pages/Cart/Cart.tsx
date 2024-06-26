import { ShoppingBag, Header, ItemsContainer, StyledCart, DivideLine} from "./styles";
import { CartItemCheckout } from "../../components/CartItemCheckout/CartItemCheckout";
import { OrderSummary } from "../../components/OrderSummary/OrderSummary";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../features/cart/cartSelectors";

export const Cart: React.FC = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <StyledCart>
      <ShoppingBag>
        <Header>Shopping bag</Header>
        <DivideLine />

        <ItemsContainer>
          {cartItems.map(cartItem => {
            return <>
              <CartItemCheckout {...cartItem}/>
              <DivideLine />
            </>
          })}
        </ItemsContainer>
      </ShoppingBag>

      <OrderSummary />
    </StyledCart>
  )
}
