import styled from "styled-components";

export const StyledCart = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  font-family: "PT Sans",sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #000;
  margin-top: 120px;
  margin-bottom: 50px;
  margin: 120px 50px 50px;
`

export const ShoppingBag = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 750px;
  height: calc(100% - 152px);
  box-sizing: border-box;
`

export const EmptyCart = styled.div`
  text-align: center;
  color: #2E3131;
  font-family: 'PT Sans';
  margin: 20px 0;
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

export const Header = styled.div`
  font-size: 2em;
  margin-bottom: .8rem;
  line-height: 2rem;
  color: #000000;
  margin: 0 0 20px;
`

export const DivideLine = styled.div`
  display: block;
  background: #d8d8d8;
  height: 1px;
  width: 100%;
  margin-bottom: 1.4rem;
`
