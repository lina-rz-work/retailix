import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StyledSignin, SigninHeader, SigninForm, SigninLabel, SigninInput, SubmitButton, PasswordWrapper, ErrorMessage, SigninMessage } from "./styles";
import { EyeButton } from "../Buttons/EyeButton/EyeButton";
import { setLoginVisible } from "../../features/uiState/uiStateSlice";
import { signInStart, signInSuccess, signInFailure } from "../../features/user/userSlice";
import { setCart } from "../../features/cart/cartSlice";
import { getOrders } from "../../features/orders/ordersSlice";
import { RootState, AppDispatch } from "../../store/store";

export const SignIn: React.FC = () => {
  const [ passwordVisible, setPasswordVisible ] = useState(false);
  const [ formData, setFormData ] = useState({ email: '', password: '' });
  const { loading, error } = useSelector((state: RootState) => state.user);
  const cart = useSelector((state: RootState) => state.cart.cartItems);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }

  const validateForm = () => {
    const { email, password } = formData;

    if (!email || !password) {
      return "All fields are required.";
    }

    return null;
  };

  const syncCart = async () => {
    try {
      if (cart.length > 0) {
        const migrateResponse = await fetch('/api/cart/migrate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cart),
        });

        if (!migrateResponse.ok) {
          throw new Error('Ошибка при переносе корзины в базу данных');
        }
      }


      const response = await fetch('/api/cart/getCart', {
        method: 'GET',
        headers: {},
      });

      if (!response.ok) {
        throw new Error('Error loading cart for authorized user');
      }

      const userCart = await response.json();
      dispatch(setCart(userCart.items));

      dispatch(getOrders());
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      dispatch(signInFailure(validationError));
      return;
    }

    try {
      dispatch(signInStart());
      
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      dispatch(setLoginVisible(false));
      setFormData({ email: '', password: '' });
      syncCart();
      navigate('/');
    } catch (err: any) {
      dispatch(signInFailure(err.message));
    }
  };

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  return (
    <StyledSignin>
      <SigninHeader>Sign in</SigninHeader>

      <SigninForm onSubmit={handleSubmit}>
        <SigninLabel htmlFor="email">Email:</SigninLabel>
        <SigninInput 
          type="email" 
          id="email" 
          value={formData.email} 
          onChange={handleChange}
        />

        <SigninLabel htmlFor="password">Password:</SigninLabel>
        <PasswordWrapper>
          <SigninInput 
            type={passwordVisible ? 'text' : 'password'} 
            id="password" 
            value={formData.password} 
            onChange={handleChange}
          />
          <EyeButton value={passwordVisible} onClick={handleToggle}/>
        </PasswordWrapper>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <SubmitButton disabled={loading} type="submit" loading={loading}>
          {loading ? 'LOADING...' : 'SIGN IN'}
        </SubmitButton>
      </SigninForm>

      <SigninMessage>
        This site is protected by <span>Terms of Service</span> apply.
      </SigninMessage>

    </StyledSignin>
  )
}
