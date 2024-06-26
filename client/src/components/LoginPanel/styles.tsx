import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: calc(100% - 90px);
  box-sizing: border-box;
  max-width: 420px;
  margin: 90px auto 0px;
  padding: 0 20px 0 30px;
`

export const CloseBtn = styled.button`
  position: absolute;
  right: 50px;
  top: 40px;
  background: transparent;
  border: 0;
  cursor: pointer;
`

export const SwitchBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 70px;
`
export const Tab = styled.div`
  font-size: 15px;
  margin: 0 10px;
  position: relative;
  cursor: pointer;
  
  &&::after {
    content: "";
    display: block;
    width: 0%;
    height: 1px;
    background-color: #626262;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &.active::after {
    width: 100%;
  }
`
