import styled from "styled-components";
import { keyframes } from "styled-components";

export const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #fff;
  z-index: 100;
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #6b6b6b;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spinAnimation} 1s linear infinite;
`;