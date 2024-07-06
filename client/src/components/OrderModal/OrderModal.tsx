import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Backdrop, OrderModalWrapper, ModalHeader, ButtonsContainer } from "./styled";
 
interface OrderDetailsProps {
  onClose: () => void;
}
 
export const OrderModal: React.FC<OrderDetailsProps> = ({ onClose }) => {
  const [ visible, setVisible ] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  }

  return (
    <>
      <Backdrop onClick={handleClose} visible={visible}/>
      <OrderModalWrapper visible={visible}>
        <ModalHeader>Order successfully placed!</ModalHeader>
        <p>Your order has been successfully placed.</p>

        <ButtonsContainer>
          <button onClick={() => navigate('/profile', { state: { activeTab: 'my orders' } })}>
            Go to orders
          </button>
          <button onClick={handleClose}>Close</button>
        </ButtonsContainer>
      </OrderModalWrapper>
    </>
  )
}
