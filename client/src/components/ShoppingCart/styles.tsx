import styled from "styled-components";

export const StyledSchoppingCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 152px);
  box-sizing: border-box;
  max-width: 420px;
  margin: 40px auto 0px;
  padding: 0 15px 0 25px;
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

export const CloseBtn = styled.button`
  position: absolute;
  right: 42px;
  top: 30px;
  background: transparent;
  border: 0;
  cursor: pointer;
`

export const Header = styled.div`
  font-size: 19px;
  font-family: "PT Sans", sans-serif;
  color: rgb(46, 49, 49);
  text-align: center;
  margin-bottom: 15px;
`

export const DivideLine = styled.div`
  display: block;
  background: #eee;
  height: 1px;
  width: 100%;
  margin-bottom: 1.4rem;
`

export const Message = styled.div`
  font-size: 13px;
  color: #2E3131;
  font-family: 'PT Sans';
`

export const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
  padding: 0 15px 0 25px;

  span {
    opacity: .5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  font-family: 'PT Sans';
  margin-top: 10px;
`

export const CheckoutBtn = styled.button`
  display: block;
  width: 100%;
  height: auto;
  font-family: "PT Sans", sans-serif;
  font-size: 14px;
  color: #000;
  background-color: transparent;
  border: 1px solid #171717;
  border-color: #171717;
  padding: 6px 30px;
  margin-top: 20px;
  text-align: center;
  text-transform: none;
  text-decoration: none;
  transition: all .2s;
  cursor: pointer;

  &:hover {
    opacity: .5;
  }
`
