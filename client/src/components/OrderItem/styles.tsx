import styled from 'styled-components';

export const OrderItemWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 97%;
  font-family: "PT Sans", sans-serif;
  background-color: #c8c8c81c;
  background-color: transparent;
  border: 1px solid #ccc;
  padding: 5px 50px;
  margin: 15px;
  cursor: pointer;


  :first-child {
    margin-bottom: 0px;
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const OrderActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 70px
`

export const CancelBtn = styled.button`
  font-family: "PT Sans", sans-serif;
  font-size: 14px;
  background: transparent;
  border: 0;
  margin: 14px 0;
  height: fit-content;
  cursor: pointer;

  &&::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #171717b8;;
    margin-top: 2px;
  }

  &:hover {
    opacity: .7;
  }

  &:hover::after {
    opacity: .7;
  }
`

export const ShowBtn = styled(CancelBtn)`
  margin-right: 20px;
`
