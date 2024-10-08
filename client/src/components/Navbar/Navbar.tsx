import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StyledNavbar, LogoName, NavMenu, NavMenuElem, ButtonsWrapper, MenuButton, NavButton, CartCounter } from "./styles";
import { ReactComponent as CartIcon } from '../../assets/images/icons/shopping-bag.svg';
import { ReactComponent as UserIcon } from '../../assets/images/icons/user-com.svg';
import { ReactComponent as MenuIcon } from '../../assets/images/icons/menu-05-svgrepo-com.svg'
import { setLoginVisible, setCartVisible } from '../../features/uiState/uiStateSlice';
import { setActiveMenuItem, setScrolled } from "../../features/navbar/navbarSlice";
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
  const { user } = useSelector((state: RootState) => state.user);
  const { activeMenuItem, scrolled, loading } = useSelector((state: RootState) => state.navbar);
  const cartQuantity = useSelector(selectCartQuantity);
  const loginVisible = useSelector(selectLoginVisible);
  const cartVisible = useSelector(selectCartVisible);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isRoute = /^\/(product|cart|profile)/.test(location.pathname);
    if (isRoute) {
      dispatch(setScrolled(true));
    } else {
      dispatch(setScrolled(false));
    }

    if (window.scrollY > 0) {
      dispatch(setScrolled(true));
    }

    const handleScroll = () => {
      if (window.scrollY > 0 || isRoute || loading) {
        dispatch(setScrolled(true));
      } else {
        dispatch(setScrolled(false));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname, loading]);

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
    
    if (window.scrollY > 0 || loading) {
      dispatch(setScrolled(true));
      return;
    }
    dispatch(setScrolled(false));

  }, [location.pathname, loading]);

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
      <MenuButton scrolled={scrolled} onClick={() => {}}>
        <MenuIcon />
      </MenuButton>

      <LogoName scrolled={scrolled} onClick={handleLogoClick}> 
        <Link to='/'>RETAILIX</Link>
      </LogoName>

      <NavMenu scrolled={scrolled}>
        {menuItems.map((item, index) => {
          return (
            <Link to={item.path} key={index}>
              <NavMenuElem
                scrolled={scrolled}
                className={activeMenuItem === item.name ? 'active' : ''}
                onClick={() => dispatch(setActiveMenuItem(item.name))}>
                {item.name}
              </NavMenuElem>
            </Link>
          )
        })}
      </NavMenu>

      <ButtonsWrapper scrolled={scrolled}>
        <NavButton scrolled={scrolled} onClick={() => handleLoginClick()}>
          <UserIcon />
          {user ? 'PROFILE' : 'LOGIN'}
        </NavButton>

        <NavButton scrolled={scrolled} onClick={() => dispatch(setCartVisible(!cartVisible))}>
          <CartIcon className='cart_item'/>
          CART
          <CartCounter className='cart_quantity'>{cartQuantity}</CartCounter>
        </NavButton>
      </ButtonsWrapper>
    </StyledNavbar>
  )
}
