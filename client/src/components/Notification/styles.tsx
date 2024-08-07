import styled, { css, keyframes } from 'styled-components';
import { CSSProperties } from 'styled-components';

interface NotificationProps {
  show: boolean;
}

interface NotificationContainerProps {
  customStyles?: ReturnType<typeof css>;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

export const NotificationContainer = styled.div<NotificationContainerProps>`
  position: fixed;
  width: 99%;
  display: flex;
  justify-content: center;
  top: 90px;
  ${(props) => props.customStyles && props.customStyles}
`

export const Message = styled.div<NotificationProps>`
  background-color: #444;
  color: #fff;
  padding: 15px 20px;
  border-radius: 5px;
  padding: 12px 18px;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  z-index: 10;


  ${(props) =>
    props.show
      ? css`
          animation: ${fadeIn} 0.5s forwards;
        `
      : css`
          animation: ${fadeOut} 0.5s forwards;
        `}
`;

