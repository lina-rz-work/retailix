import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { StyledNavbar, LogoName, NavMenu, NavMenuElem, ButtonsWrapper, NavButton, CartCounter } from "./styles";
import { ReactComponent as CartIcon } from '../../assets/images/icons/shopping-bag.svg';
import { ReactComponent as UserIcon } from '../../assets/images/icons/user-com.svg';
import { setLoginVisible, setCartVisible } from '../../features/uiState/uiStateSlice';
import { setActiveMenuItem } from "../../features/navbar/navbarSlice";
import { selectLoginVisible, selectCartVisible } from "../../features/uiState/uiStateSelectors";
import { selectCartQuantity } from "../../features/cart/cartSelectors";
import { RootState } from "../../store/store";

const menuItems = [
  {name: 'home', path: '/'}, 
  {name: 'women', path: '/women'}, 
  {name: 'men', path: '/men'}, 
  {name: 'kids', path: '/kids'}
];

export const Navbar: React.FC = () => {
  const [ scrolled, setScrolled ] = useState<boolean>(false);
  const { user } = useSelector((state: RootState) => state.user);
  const { activeMenuItem } = useSelector((state: RootState) => state.navbar);
  const cartQuantity = useSelector(selectCartQuantity);
  const loginVisible = useSelector(selectLoginVisible);
  const cartVisible = useSelector(selectCartVisible);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isRoute = /^\/(product|cart|profile)/.test(location.pathname);
    if (isRoute) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    if (window.scrollY > 0) {
      setScrolled(true);
    }

    const handleScroll = () => {
      if (window.scrollY > 0 || isRoute) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/') {
      dispatch(setActiveMenuItem('home'));
      return;
    }

    const isRoute = /^\/(women|men|kids)/.test(location.pathname);
    if (!isRoute) {
      return;
    }

    dispatch(setActiveMenuItem(location.pathname.slice(1)));
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  function handleLoginClick() {
    if (user) {
      navigate('/profile')
      dispatch(setActiveMenuItem(null));
      return
    }
    dispatch(setLoginVisible(!loginVisible));
  }

  function handleLogoClick() {
    dispatch(setActiveMenuItem('home'));
    window.scrollTo(0, 0);
  }

  return (
    <StyledNavbar scrolled={scrolled}>
      <LogoName scrolled={scrolled} onClick={handleLogoClick}> 
        <Link to='/'>RETAILIX</Link>
      </LogoName>

      <NavMenu scrolled={scrolled}>
        {menuItems.map((item, index) => {
          return (
            <NavMenuElem 
              key={index}
              scrolled={scrolled}
              className={activeMenuItem === item.name ? 'active' : ''}
              onClick={() => dispatch(setActiveMenuItem(item.name))}>
              <Link to={item.path}>{item.name}</Link>
            </NavMenuElem>
          )
        })}
      </NavMenu>

      <ButtonsWrapper scrolled={scrolled}>
        <NavButton scrolled={scrolled} onClick={() => handleLoginClick()}>
          <UserIcon />
          {user ? 'PROFILE' : 'LOGIN'}
        </NavButton>

        <NavButton scrolled={scrolled} onClick={() => dispatch(setCartVisible(!cartVisible))}>
          <CartIcon />
          CART
          <CartCounter>{cartQuantity}</CartCounter>
        </NavButton>
      </ButtonsWrapper>

    </StyledNavbar>
  )
}
