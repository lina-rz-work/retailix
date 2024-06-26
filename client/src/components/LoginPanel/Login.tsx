import { useState } from "react";
import { SlidePanel } from "../../components/SlidePanel/SlidePanel";
import { SignIn } from "../SignIn/SignIn";
import { Signup } from "../Signup/Signup";
import { StyledLogin, SwitchBox, Tab, CloseBtn } from "./styles";
import { ReactComponent as CrossIcon } from "../../assets/images/icons/cross-svgrepo-com.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginVisible } from "../../features/uiState/uiStateSelectors";
import { setLoginVisible } from "../../features/uiState/uiStateSlice";

export const LoginSidePanel: React.FC = () => {
  const [ showSignin, setShowSignin ] = useState(true);
  const [ showSignup, setShowSignup ] = useState(false);
  const loginVisible = useSelector(selectLoginVisible);
  const dispatch = useDispatch();
  
  function handleClick() {
    setShowSignin(!showSignin);
    setShowSignup(!showSignup);
  }

  return (
    <SlidePanel isVisible={loginVisible} onClose={() => dispatch(setLoginVisible(false))}>
      <StyledLogin>
        <CloseBtn onClick={() => dispatch(setLoginVisible(false))}>
          <CrossIcon />
        </CloseBtn>

        { showSignin && <SignIn /> }
        { showSignup && <Signup /> }

        <SwitchBox>
          <Tab 
            className={showSignin ? 'active' : ''} 
            onClick={handleClick}>
            Sign in
          </Tab>
          <Tab 
            className={showSignup ? 'active' : ''} 
            onClick={handleClick}>
            Create account
          </Tab>
        </SwitchBox>
      </StyledLogin>
    </SlidePanel>
  )
}
