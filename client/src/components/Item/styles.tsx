import styled from "styled-components";

interface StyledItemProps {
  clicked: boolean;
}

interface AddButtonProps {
  clicked: boolean;
}

interface ChooseSizeProps {
  clicked: boolean;
}

export const StyledItem = styled.div<StyledItemProps>`
  width: 100%;
  max-width: 250px;
  font-family: "PT Sans", sans-serif;
  font-size: 14px;

  .add_btn {
    transform: ${props => props.clicked ? "translateY(-40px)" : "translateY(20px)"};
    opacity: ${props => props.clicked ? 1 : 0};
    transition: transform 0.5s, opacity 0.5s;
    transition-delay: ${props => props.clicked ? "0s" : "0.3s"};
  }

  &:hover .add_btn {
    transform: ${props => props.clicked ? "translateY(-48px)" : "translateY(0px)"};
    opacity: 1;
    transition-delay: 0s;
  }

  a {
    text-decoration: none;
  }
`

export const PictureBlock = styled.div`
  position: relative;
  width: 100%;
  max-width: 250px;

  img {
    width: 250px;
    height: 330px;
    object-fit: cover;
    object-position: center;
    display: block;
  }
`

export const AddButton = styled.button<AddButtonProps>`
  font-family: "PT Sans", sans-serif;
  width: 100%;
  height: auto;
  display: block;
  position: absolute;
  left: 0;
  bottom: -1px;
  background-color: ${props => props.clicked ? "hsla(0, 0%, 100%, .9)" : "hsla(0, 0%, 100%, .5)"};
  transition: background-color 0.5s, transform 0.5s, opacity 0.5s;
  transition-delay: ${props => props.clicked ? "0s" : "0.3s"};
  opacity: 0;
  text-align: center;
  border: none;
  padding: 12px 5px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background-color: hsla(0, 0%, 100%, .9);
  }
`

export const ChooseSize = styled.div<ChooseSizeProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 250px;
  height: auto;
  position: absolute;
  left: 0;
  bottom: -1px;
  background-color: ${props => props.clicked ? "hsla(0, 0%, 100%, .9)" : "hsla(0, 0%, 100%, .5)"};
  transition: opacity 0.5s, transform 0.5s;
  transform: translateY(0px);
  opacity: ${props => props.clicked ? 1 : 0};
  transition-delay: ${props => props.clicked ? "0.2s" : "0.1s"};
  text-align: center;
  border: none;
  padding: 10px 5px 20px;
  font-weight: 400;
  cursor: pointer;

  p {
    font-size: 13px;
    padding: 0;
    margin: 0;
    margin-right: 10px;
    color: #2e3131;
  }
`

export const SizeButton = styled.button`
  position: relative;
  background: transparent;
  border: 0;
  color: rgb(46, 49, 49);
  font-family: "PT Sans",sans-serif;
  font-size: 14px;
  padding: 0 2px;
  margin-right: 1rem;
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

export const ItemName = styled.p`
  text-align: center;
  color: #000000;
  margin: 6px 0;

  &:hover {
    opacity: .7;
  }
`

export const PricesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`

export const NewPrice = styled.div`
  font-size: 16px;
  color: #000000;
`

export const OldPrice = styled.div`
  color: #8c8c8c;
  font-size: 16px;
  font-weight: 300;
  text-decoration: line-through;
`
