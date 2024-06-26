import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StyledSignup, SignupHeader, SignupForm, SignupLabel, SignupInput, SubmitButton, PasswordWrapper, ErrorMessage, SignupMessage } from "./styles";
import { EyeButton } from "../Buttons/EyeButton/EyeButton";
import { signInStart, signInSuccess, signInFailure } from "../../features/user/userSlice";
import { setLoginVisible } from "../../features/uiState/uiStateSlice";

export const Signup: React.FC = () => {
  const [ formData, setFormData ] = useState({ username: '', email: '', password: '' });
  const [ error, setError ] = useState<string | null>(null);
  const [ loading, setLoading ] = useState(false);
  const [ passwordVisible, setPasswordVisible ] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    })
  }

  const validateForm = () => {
    const { username, email, password } = formData;
    const regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!username || !email || !password) {
      return "All fields are required.";
    }

    if (regExp.test(email) === false) {
      return "Please enter a valid email address.";
    }

    if (password.length < 6) {
      return "Your password must contain a minimum of 6 characters.";
    }

    return null;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setError(null);
      setLoading(false);
      await signIn();
      dispatch(setLoginVisible(false));
      setFormData({ username: '', email: '', password: '' });
      navigate('/');
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  const signIn = async () => {
    try {
      dispatch(signInStart());
      
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      dispatch(setLoginVisible(false));
    } catch (err: any) {
      dispatch(signInFailure(err.message));
    }
  }

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  return (
    <StyledSignup>
      <SignupHeader>Create an account</SignupHeader>

      <SignupForm onSubmit={handleSubmit} noValidate>
        <SignupLabel htmlFor="username">Username:</SignupLabel>
        <SignupInput 
          type="text" 
          id="username" 
          value={formData.username} 
          onChange={handleChange}
        />
        
        <SignupLabel htmlFor="email">Email:</SignupLabel>
        <SignupInput 
          type="email" 
          id="email" 
          value={formData.email} 
          onChange={handleChange}
        />

        <SignupLabel htmlFor="password">Password:</SignupLabel>
        <PasswordWrapper>
          <SignupInput 
            type={passwordVisible ? 'text' : 'password'} 
            id="password" 
            value={formData.password} 
            onChange={handleChange}
          />
          <EyeButton value={passwordVisible} onClick={handleToggle}/>
        </PasswordWrapper>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <SubmitButton disabled={loading} type="submit" loading={loading}>
          {loading ? 'LOADING...' : 'CREATE ACCOUNT'}
        </SubmitButton>
      </SignupForm>


      <SignupMessage>
        By clicking the button, you confirm that you have read the <span>Privacy Agreement</span> and allow RETAILIX to use your personal data.
      </SignupMessage>

    </StyledSignup>
  )
}
