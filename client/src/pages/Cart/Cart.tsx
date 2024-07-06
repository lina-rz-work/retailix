import { useState } from "react";
import { useSelector } from "react-redux";
import { ShoppingBag, Header, EmptyCart, ItemsContainer, StyledCart, DivideLine} from "./styles";
import { CartItemCheckout } from "../../components/CartItemCheckout/CartItemCheckout";
import { OrderSummary } from "../../components/OrderSummary/OrderSummary";
import { selectCartItems } from "../../features/cart/cartSelectors";
import { Notification } from "../../components/Notification/Notification";
import { OrderModal } from "../../components/OrderModal/OrderModal";

export const Cart: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  const [ notification, setNotification ] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <StyledCart>
      <ShoppingBag>
        {notification && <Notification message={notification} onClose={() => setNotification(null)} />}
        {isModalOpen && <OrderModal onClose={() => setIsModalOpen(false)} />}

        <Header>Shopping bag</Header>
        <DivideLine />

        {cartItems.length === 0 ? 
          <EmptyCart>Your shopping bag is empty</EmptyCart>
          :
          <ItemsContainer>
            {cartItems.map(cartItem => {
              return <>
                <CartItemCheckout {...cartItem}/>
                <DivideLine />
              </>
            })}
          </ItemsContainer>
        }
      </ShoppingBag>

      <OrderSummary 
        showNotification={(message: string) => setNotification(message)} 
        showModal={() => setIsModalOpen(true)}
      />
    </StyledCart>
  )
}
