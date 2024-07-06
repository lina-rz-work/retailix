import { useState } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Order } from '../../types/order';
import { OrderItem } from '../OrderItem/OrderItem';
import { OrderDetails } from '../OrderDetails/OrderDetails';
import { OrderListContainer, OrderMessage } from './styles';

export const OrderList = () => {
  const orders = useSelector((state: RootState) => state.orders.orders);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  return (
    <OrderListContainer>
      {!orders.length && <OrderMessage>Explore the catalog to make your first order.</OrderMessage>}

      {!selectedOrder && orders.map((order: Order, index) => {
        return (
          <OrderItem 
            key={index} 
            order={order} 
            onClick={() => setSelectedOrder(order)}
            // onClose={() => setSelectedOrder(null)}
          />
        )
      })}

      {selectedOrder && <OrderDetails selectedOrder={selectedOrder} onClose={() => setSelectedOrder(null)} />}
    </OrderListContainer>
  )
}
