import { useDispatch } from "react-redux";
import { Order } from "../../types/order";
import { OrderDetailsWrapper, CloseBtn, CancelOrder, OrderInfo, DivideLine } from "./styles";
import { OrderProductInfo } from "../OrderProductInfo/OrderProductInfo";
import { ReactComponent as CrossIcon } from '../../assets/images/icons/cross-svgrepo-com.svg';
import { cancelOrder } from "../../features/orders/ordersSlice";
import { AppDispatch } from "../../store/store";

interface OrderDetailsProps {
  selectedOrder: Order;
  onClose: () => void;
}

export const OrderDetails: React.FC<OrderDetailsProps> = ({ selectedOrder, onClose }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleCancelOrder = async () => {
    await dispatch(cancelOrder(selectedOrder.orderId));
    onClose();
  }

  return (
      <>
        <OrderDetailsWrapper>
          <CloseBtn onClick={onClose}>
            <CrossIcon />
          </CloseBtn>

          <OrderInfo>
            <div>
              <h3>Order ID: {selectedOrder.orderId.slice(0, 7)}</h3>
              <p>Tax: Calculated in checkout</p>
              <p>Shipping: {Number(selectedOrder.totalAmount) > 75 ? 'FREE' : '$9.95'}</p>
              <p>Total Amount: ${selectedOrder.totalAmount}</p>
            </div>
            <div>
              <p>{new Date(selectedOrder.createdAt).toLocaleString()}</p>
              <CancelOrder onClick={handleCancelOrder}>Cancel order</CancelOrder>
            </div>
          </OrderInfo>

          <h3>Items:</h3>  
          {selectedOrder.items.map(item => (
            <>
              <OrderProductInfo {...item} />
              <DivideLine />
            </>
          ))}
        </OrderDetailsWrapper>
      </>
    )
}
