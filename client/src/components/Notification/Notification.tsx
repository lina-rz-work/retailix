import { useState, useEffect } from 'react';
import { css } from 'styled-components';
import { Message, NotificationContainer } from './styles';

interface Props {
  message: string;
  duration?: number;
  onClose: () => void;
  customStyles?: ReturnType<typeof css>;
}

export const Notification: React.FC<Props> = ({ message, duration = 3000, onClose, customStyles }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 500); 
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [message, duration, onClose]);

  return (
    <NotificationContainer customStyles={customStyles}>
      <Message show={visible}>{message}</Message>
    </NotificationContainer>
  )
};
