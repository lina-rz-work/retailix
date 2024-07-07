import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(120%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(120%);
  }
`;

export const Panel = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  max-width: 490px;
  height: 100%;
  width: 100%;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '110%')});
  animation: ${({ isVisible }) => (isVisible ? slideIn : slideOut)} 0.5s forwards;
  z-index: 10;
`;

export const Overlay = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, ${({ isVisible }) => (isVisible ? '0.6' : '0')});
  pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};
  transition: background 0.3s ease-in-out;
  z-index: 9;
`;
