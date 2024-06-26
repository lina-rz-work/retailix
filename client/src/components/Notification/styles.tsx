import styled, { css, keyframes } from 'styled-components';

interface NotificationProps {
  show: boolean;
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


export const NotificationContainer = styled.div<NotificationProps>`
  position: fixed;
  top: 76px;
  left: 46.5%;
  background-color: #444;
  color: #fff;
  padding: 15px 20px;
  border-radius: 5px;
  
  /* background-color: #000; */
  /* color: #fff; */
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

