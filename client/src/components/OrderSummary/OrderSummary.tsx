import { OrderInfo, OrderInfoContainer, OrderDetails, DetailName, DetailValue, TotalPrice, CheckoutBtn } from "./styles";
import { ProductTitle, DivideLineOrder, PayBtns, PayBtn, CheckoutMessage } from "./styles";
import { ReactComponent as PayPalIcon} from "../../assets/images/icons/paypal-3-svgrepo-com.svg";
import { ReactComponent as StripeIcon} from "../../assets/images/icons/stripe-svgrepo-com.svg";
// import { useShopContext } from "../../context/ShopContext";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "../../features/cart/cartSelectors";

export const OrderSummary: React.FC = () => {
  // const { getTotalPrice } = useShopContext();
  const totalPrice = useSelector(selectTotalPrice);
  const subtotal = totalPrice;

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

        <CheckoutBtn>CHECKOUT</CheckoutBtn>
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
