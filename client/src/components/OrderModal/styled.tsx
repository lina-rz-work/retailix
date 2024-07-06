import styled, { keyframes } from "styled-components";

interface OrderModalWrapperProps {
  visible: boolean;
}

interface BackdropProps {
  visible: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const OrderModalWrapper = styled.div<OrderModalWrapperProps>`
  box-sizing: border-box;
  position: fixed;
  top: 40%;
  left: 50%;
  font-family: "PT Sans", sans-serif;
  transform: translate(-50%, -50%);
  background: white;
  padding: 30px;
  border: 1px solid #ccc;
  width: 400px;
  z-index: 1000;
  border-radius: 5px;
  opacity: 0;
  animation: ${props => (props.visible ? fadeIn : fadeOut)} .3s forwards;
`;

export const ModalHeader = styled.h2`
  margin-top: 0;
  text-align: center;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;

  button {
    font-family: "PT Sans", sans-serif;
    font-size: 14px;
    background: transparent;
    border: 0;
    height: fit-content;
    cursor: pointer;

    &::after {
      content: "";
      display: block;
      width: 0%;
      height: 1px;
      background-color: #171717b8;;
      margin-top: 0px;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`
 
export const Backdrop = styled.div<BackdropProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 0;
  animation: ${props => (props.visible ? fadeIn : fadeOut)} .3s forwards;
`;
 