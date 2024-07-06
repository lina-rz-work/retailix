import styled from "styled-components";

export const OrderDetailsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: white;
  padding: 50px;
  border: 1px solid #ccc;
  width: 97%;
  margin-left: 15px;
  margin-top: 15px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  align-self: end;
  background-color: transparent;
  border: 0;
  right: 30px;
  top: 30px;
  cursor: pointer;
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 15px;
`

export const CancelOrder = styled.p`
  opacity: .3;
  text-align: end;
  transition: opacity 0.1s ease;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #eee;
    border-radius: 6px;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`

export const DivideLine = styled.div`
  display: block;
  background: #d8d8d8;
  height: 1px;
  width: 100%;
  margin-bottom: 1.4rem;
`
