import styled from 'styled-components';

interface StyledNavbarProps {
  scrolled: boolean;
}

interface LogoNameProps {
  scrolled: boolean;
}

interface NavMenuProps {
  scrolled: boolean;
}

interface NavMenuElemProps {
  scrolled: boolean;
}

interface ButtonsWrapperProps {
  scrolled: boolean;
}

interface NavButtonProps {
  scrolled: boolean;
}

export const StyledNavbar = styled.div<StyledNavbarProps>`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: ${props => props.scrolled ? "rgb(255 255 255 / 99%)" : "transparent"};
  box-shadow: 0 0 10px -3px #0000004f;
  padding: 14px 35px;
  transition: background-color 0.1s ease;
  z-index: 8;
`

export const LogoName = styled.div<LogoNameProps>`
  display: flex;
  align-items: center;
  font-size: 38px;
  font-weight: 600;
  font-family: Bodoni Cyrillic;
  color: #fff;
  backdrop-filter: blur(10px);
  border-radius: 11px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${props => props.scrolled ? "#171717" : "#fff"};
  }
`

export const NavMenu = styled.ul<NavMenuProps>`
  display: flex;
  align-items: end;
  list-style: none;
  text-transform: uppercase;
  color: #efe3de;
  color: ${props => props.scrolled ? "#171717" : "#efe3de"};
  gap: 50px;
  margin-bottom: 8px;
  padding-left: 0;

  a {
    text-decoration: none;
    color: inherit;
    font-weight: 300;
    font-size: 14px;
  }
`

export const NavMenuElem = styled.div<NavMenuElemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  cursor: pointer;
  position: relative;
  
  &&::after {
    content: "";
    display: block;
    width: 0%;
    height: 1px;
    background-color: ${props => props.scrolled ? "#171717" : "#efe3de"};
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
`;


export const ButtonsWrapper = styled.div<ButtonsWrapperProps>`
  display: flex;
  align-items: center;
  gap: 45px;
  color: ${props => props.scrolled ? "#171717" : "#efe3de"};

  a {
    text-decoration: none;
    color: inherit;
  }
`

export const NavButton = styled.div<NavButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; //?
  background-color: transparent;
  border: 0;
  font-size: 12px;
  cursor: pointer;
  transition: color 0.1s ease;

  svg {
    /* fill: #000; */
    /* transition: fill 0.1s ease; */
    fill: ${props => props.scrolled ? "#171717" : "#efe3de"};
    margin-bottom: 4px;
    transition: all 0.2s ease;
  }

  &:hover {
    opacity: .7;
  }

  &:hover svg {
    opacity: .7;
  }
`

export const CartCounter = styled.div`
  position: absolute;
  left: 28px;
  top: -12px;
`


