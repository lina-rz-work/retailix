import styled from "styled-components";

export const Menu = styled.div`
  max-width: 250px;
  width: 100%;
  height: 100vh;
  position: -webkit-sticky;
  position: sticky;
  top: 76px;
  margin-right: 5%;
  padding-top: 40px;
`

export const ListContainer = styled.div`
  width: auto;
  list-style: none;
  padding: 0;
  margin: 0 0 70px;
`

export const ListItem = styled.li`
  color: #2e3131;
  font-size: 15px;
  margin-bottom: 25px;
  text-transform: uppercase;
  position: relative;
  width: max-content;
  cursor: pointer;
  
  &&::after {
    content: "";
    display: block;
    width: 0%;
    height: 1px;
    background-color: #2e3131;
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

export const SignoutBtn = styled.div`
  color: #2e3131;
  font-size: 15px;
  margin-bottom: 25px;
  text-transform: uppercase;
  position: relative;
  width: auto;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &:hover {
    opacity: .5;
  }
`

export const ContentContainer = styled.div`
  width: 100%;
  padding-top: 40px;
`

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
  margin: 76px 50px 50px;
`

export const MyOrders = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 152px);
  box-sizing: border-box;
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

export const Subscriptions = styled.div`
  display: block
`

export const SubscrMessage = styled.div`
  margin-top: 32px;
  color: #2e3131;
`