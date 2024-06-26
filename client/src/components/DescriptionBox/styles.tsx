import styled from "styled-components";

export const StyledDescription = styled.div`
  font-family: "PT Sans", sans-serif;
  font-size: 15px;
  margin-bottom: 50px;
`

export const Description = styled.div`
  text-align: justify;
  margin-bottom: 30px;
  width: 85%;
`

export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
`

export const NavElem = styled.div`
  margin-right: 20px;
  cursor: pointer;
  position: relative;
  color: #0000005e;

  &.active {
    color: #000;
  }

  &:hover {
    color: #000;
  }
  
  &&::after {
    content: "";
    display: block;
    width: 0%;
    height: 1px;
    background-color: #171717;
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

export const Reviews = styled.div`
  display: flex;
  flex-direction: column;
  height: 45vh;
  font-size: 14px;
`
