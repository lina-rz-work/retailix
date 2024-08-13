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

interface BurgerProps {
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

  @media(max-width: 800px) {
    padding: 14px 20px;
  }

  @media(max-width: 500px) {
    padding: 14px 15px;
  }
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

  @media(max-width: 800px) {
    font-size: 28px;
  }

  @media(max-width: 500px) {
    font-size: 27px;
    padding-left: 25px;
  }

  @media(max-width: 350px) {
    font-size: 24px;
    padding-left: 0px;
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

  @media(max-width: 800px) {
    gap: 15px;
    
    a {
      font-size: 13px;
    }
  }

  @media(max-width: 500px) {
    display: none;
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

  @media(max-width: 800px) {
    gap: 15px;
  }

  @media(max-width: 500px) {
    gap: 10px;
  }
`

export const NavButton = styled.div<NavButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: transparent;
  border: 0;
  font-size: 12px;
  cursor: pointer;
  transition: color 0.1s ease;

  svg {
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

  @media(max-width: 500px) {
    font-size: 13px;

    .cart_quantity {
      font-size: 11px;
    }
  }

  @media(max-width: 500px) {
    font-size: 0px;

    svg {
      fill: ${props => props.scrolled ? "#171717" : "#ffffff"};
      width: 27px;
    }

    .cart_item {
      width: 25px;
    }

    .cart_quantity {
      font-size: 11px;
      color: ${props => props.scrolled ? "#171717" : "#ffffff"};
      left: 24px;
      top: -11px;
    }
  }
`

export const MenuButton = styled.div<BurgerProps>`
  display: none;
  flex-direction: column;
  align-items: center;
  align-self: center;
  background-color: transparent;
  border: 0;
  font-size: 12px;
  cursor: pointer;
  transition: color 0.1s ease;
  width: 30px;
  height: 30px;

  svg {
    margin-bottom: 4px;
    transition: all 0.2s ease;

    path {
      stroke: ${props => props.scrolled ? "#171717" : "#ffffff"};
    }
  }

  @media(max-width: 500px) {
    display: flex;
  }
`

export const CartCounter = styled.div`
  position: absolute;
  left: 28px;
  top: -12px;
`

