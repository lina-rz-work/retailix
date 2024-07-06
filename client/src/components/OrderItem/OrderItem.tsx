import { useDispatch } from 'react-redux';
import { Order } from '../../types/order';
import { OrderItemWrapper, OrderInfo, OrderActions, ShowBtn, CancelBtn } from './styles';
import { cancelOrder } from '../../features/orders/ordersSlice';
import { AppDispatch } from '../../store/store';

interface OrderItemProps {
  order: Order;
  onClick: () => void; 
}

export const OrderItem: React.FC<OrderItemProps> = ({ order, onClick }) => {
  const dispatch: AppDispatch = useDispatch();

  function handleCancelClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    dispatch(cancelOrder(order.orderId))
  }

  return (
    <OrderItemWrapper onClick={onClick}>
      <OrderInfo>
        <p style={{marginBottom: '0px'}}>Order ID: {order.orderId.slice(0, 7)}</p>
        <p>Total Amount: ${order.totalAmount}</p>
      </OrderInfo>

      <OrderActions>
        <p>{new Date(order.createdAt).toLocaleString()}</p>
        <div>
          <ShowBtn onClick={onClick}>Show order</ShowBtn>
          <CancelBtn onClick={(e) => handleCancelClick(e)}>Cancel order</CancelBtn>
        </div>
      </OrderActions>
    </OrderItemWrapper>
  )
}
