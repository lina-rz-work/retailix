import styled, { keyframes } from "styled-components";

export const StyledShopCategory = styled.div`
  position: relative;
  min-height: 100vh;
`

export const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 1;
`;

export const Spinner = styled.div`
  font-family: "PT Sans", sans-serif;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-left-color: #6b6b6b;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  animation: ${spinAnimation} 1s linear infinite;
`;
