import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { OrderInfo, OrderInfoContainer, OrderDetails, DetailName, DetailValue, TotalPrice, CheckoutBtn } from "./styles";
import { ProductTitle, DivideLineOrder, PayBtns, PayBtn, CheckoutMessage } from "./styles";
import { ReactComponent as PayPalIcon} from "../../assets/images/icons/paypal-3-svgrepo-com.svg";
import { ReactComponent as StripeIcon} from "../../assets/images/icons/stripe-svgrepo-com.svg";
import { selectTotalPrice } from "../../features/cart/cartSelectors";
import { createOrder } from "../../features/orders/ordersSlice";
import { clearCartServer } from "../../features/cart/cartSlice";
import { RootState } from "../../store/store";
import { AppDispatch } from "../../store/store";
import { useState } from "react";

interface OrderSummaryProps {
  showNotification: (message: string) => void;
  showModal: () => void;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ showNotification, showModal }) => {
  const items = useSelector((state: RootState) => state.cart.cartItems);
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const orderStatus = useSelector((state: RootState) => state.orders.status);
  const totalPrice = useSelector(selectTotalPrice);
  const [delay, setDelay] = useState<boolean>(false);
  const subtotal = totalPrice;
  const dispatch: AppDispatch = useDispatch();

  async function handleCheckout() {
    if (!isAuthenticated) {
      showNotification('Please log in to place your order!');
      return;
    }
    if (items.length === 0) {
      showNotification('Your cart is empty. Please add items to place an order.');
      return;
    }
    
    await dispatch(createOrder({ items, total }));

    setDelay(true);
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(undefined);
      }, 500);
    });
    await dispatch(clearCartServer());
    setDelay(false);
    showModal();
  }

  const shipping = (() => {
    if (subtotal < 75 && subtotal !== 0) {
      return 9.95;
    }
  })();

  const total = (() => {
    if (shipping) {
      return subtotal + shipping;
    }
    return subtotal;
  })().toFixed(2);

  return (
    <OrderInfo>
      <OrderInfoContainer>
        <ProductTitle>Order Summary</ProductTitle>
        
        {[['Subtotal:', `$${subtotal.toFixed(2)}`], 
          ['Shipping:', `${shipping ? '$' + shipping : 'FREE'}`], 
          ['Tax:', 'Calculated in checkout']].map(detail => (
            <OrderDetails>
              <DetailName>{detail[0]}</DetailName>
              <DetailValue>{detail[1]}</DetailValue>
            </OrderDetails>
        ))}
        <DivideLineOrder />

        <DetailName>Promo Code</DetailName>
        <DivideLineOrder />
        <TotalPrice>Estimated Total <span>${total}</span></TotalPrice>

          
        <CheckoutBtn onClick={handleCheckout} status={orderStatus} delay={delay}>
          {orderStatus === 'loading' || delay ? 'PPOCESSING ORDER...' : 'CHECKOUT'}
        </CheckoutBtn>
        <PayBtns>
          <PayBtn><PayPalIcon /></PayBtn>
          <PayBtn><StripeIcon /></PayBtn>
        </PayBtns>

        <CheckoutMessage>
          By proceeding to payment, I confirm that I have read and agreed to the Terms and Conditions <span>Privacy policy, delivery and return terms </span>
        </CheckoutMessage>

      </OrderInfoContainer>
    </OrderInfo>
  )
}
