import styled from "styled-components";

export const StyledSizeBox = styled.div`
  position: relative;
  margin-bottom: 3rem;
  width: 100%;
`

export const SizesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin: 0 0 20px;

  span {
    margin-right: 10px;
  }
`;

export const SelectSize = styled.div`
  color: rgb(46, 49, 49);
`

export const SizeTable = styled.div`
  color: #a4a4a4;
  cursor: pointer;
`

export const SizeBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const SizeButton = styled.button`
  position: relative;
  background: transparent;
  border: 0;
  color: rgb(46, 49, 49);
  font-family: "PT Sans",sans-serif;
  font-size: 14px;
  padding: 0 2px;
  margin-right: 2.2rem;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #171717;
  }

  &&::after {
    content: "";
    position: absolute;
    display: block;
    height: 1px;
    width: 0%;
    background-color: #171717;
    left: 0;
    bottom: 0;
    transition: all .3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &.active::after {
    width: 100%;
  }
`;

export const WarnMessage = styled.p`
  font-size: 13px;
  position: absolute;
  top: 50px;
  color: #c80000bf;
`;
