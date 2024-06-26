import { useState, useEffect } from 'react';
import { NotificationContainer } from './styles';

interface Props {
  message: string;
  duration?: number;
  onClose: () => void;
}

export const Notification: React.FC<Props> = ({ message, duration = 3000, onClose }) => {
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

  return <NotificationContainer show={visible}>{message}</NotificationContainer>;
};
