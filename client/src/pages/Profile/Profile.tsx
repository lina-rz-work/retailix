import { useState } from "react";
import { useDispatch } from "react-redux";
import { Menu, ListContainer, ListItem, SignoutBtn, ContentContainer, MyOrders, Header, OrdersMessage, StyledCart, DivideLine, Subscriptions, SubscrMessage} from "./styles";
import { ProfileInfo } from "../../components/ProfileInfo/ProfileInfo";
import { signOutUserStart, signOutUserSuccess, signOutUserFailure } from "../../features/user/userSlice";
import { clearCart } from "../../features/cart/cartSlice";

export const Profile: React.FC = () => {
  const [ isActive, setIsActive ] = useState<string | null>('my account');
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());

      const res = await fetch('/api/auth/signout');
      const data = await res.json();

      if (data.success === false) {
        dispatch(signOutUserFailure(data.message));
        return;
      }
      dispatch(signOutUserSuccess(data));
      dispatch(clearCart());
    } catch(err: any) {
      dispatch(signOutUserFailure(err.message));
    }
  }

  return (
    <StyledCart>
      <Menu>
        <ListContainer>
          {['my account', 'my orders', 'subscriptions'].map((item, index) => {
            return (
              <ListItem 
                key={index}
                className={isActive === item ? 'active' : ''}
                onClick={() => setIsActive(item)}>
                {item}
              </ListItem>
            );
          })}
        </ListContainer>
        <SignoutBtn onClick={handleSignOut}>Sign out</SignoutBtn>
      </Menu>


      <ContentContainer>
        {isActive === 'my account' && <ProfileInfo />}

        {isActive === 'my orders' && 
          <MyOrders>
            <Header>My Orders</Header>
            <DivideLine />
            <OrdersMessage>Explore the catalog to make your first order.</OrdersMessage>
          </MyOrders>
        }

        {isActive === 'subscriptions' && 
          <Subscriptions>
            <Header>Subscriptions</Header>
            <DivideLine />
            <SubscrMessage>You don't have any subscriptions yet.</SubscrMessage>
          </Subscriptions>
        }
      </ContentContainer>
    </StyledCart>
  )
}
