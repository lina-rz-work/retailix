import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header, DivideLine, InfoContainer, StyledInfo, InfoForm, InfoLabel, InfoInput, SubmitButton, DeleteButton, PasswordWrapper, ErrorMessage, InfoMessage } from "./styles";
import { updateUserStart, updateUserSuccess, updateUserFailure, deleteUserFailure, deleteUserStart, deleteUserSuccess } from "../../features/user/userSlice";
import { EyeButton } from "../../components/Buttons/EyeButton/EyeButton";
import { Notification } from "../Notification/Notification";
import { clearCart } from "../../features/cart/cartSlice";
import { RootState } from "../../store/store";

export const ProfileInfo: React.FC = () => {
  const { user, error } = useSelector((state: RootState) => state.user);
  const [ formData, setFormData ] = useState<any>({ username: user.username, email: user.email});
  const [ passwordVisible, setPasswordVisible ] = useState(false);
  const [ notification, setNotification ] = useState<string | null>(null);
  const [ loading, setLoading ] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  const validateForm = () => {
    const regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (formData.email && regExp.test(formData.email) === false) {
      return "Please enter a valid email address.";
    }

    if (formData.password && formData.password.length < 6) {
      return "Your password must contain a minimum of 6 characters.";
    }

    return null;
  };

  const removeEmptyFields = (data: FormData) => {
    const cleanedData: any = { ...data };
    Object.keys(cleanedData).forEach(key => {
      if ( cleanedData[key].trim() === '') {
        delete cleanedData[key];
      }
    });
    return cleanedData;
  };

  const handleUpdateUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      dispatch(updateUserFailure(validationError));
      return;
    }

    try {
      dispatch(updateUserStart());
      setLoading(true);

      const updatedData = removeEmptyFields(formData);
      
      const res = await fetch(`/api/user/update/${user._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }
      dispatch(updateUserSuccess(data));
      setFormData({ username: data.username, email: data.email, password: ''});
      setLoading(false);
      showNotification();
    } catch (err: any) {
      dispatch(updateUserFailure(err.message));
    }
  };

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());

      const res = await fetch(`/api/user/delete/${user._id}`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
      dispatch(clearCart());
    } catch(err: any) {
      dispatch(deleteUserFailure(err.message));
    }
  }

  const showNotification = () => {
    setNotification('Your account has been updated!');
  };

  const handleNotificationClose = () => {
    setNotification(null);
  };

  return (
    <InfoContainer>
      {notification && <Notification message={notification} onClose={handleNotificationClose} />}

      <Header>Personal Information</Header>
      <DivideLine />
      {/* <Notification message={'notification'}/> */}
      
      <StyledInfo>
        <InfoForm onSubmit={handleUpdateUser} noValidate>
          <InfoLabel htmlFor="username">Username:</InfoLabel>
          <InfoInput value={formData.username} type="text" id="username" onChange={handleChange}/>
          
          <InfoLabel htmlFor="email">Email:</InfoLabel>
          <InfoInput value={formData.email} type="email" id="email" onChange={handleChange}/>

          <InfoLabel htmlFor="password">New password:</InfoLabel>
          <PasswordWrapper>
            <InfoInput 
              value={formData.password && formData.password} 
              type={passwordVisible ? 'text' : 'password'} 
              id="password" 
              onChange={handleChange}
            />
            <EyeButton value={passwordVisible} onClick={handleToggle}/>
          </PasswordWrapper>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <SubmitButton type="submit" loading={loading}>
            {loading ? 'LOADING...' : 'UPDATE ACCOUNT'}
          </SubmitButton>
        </InfoForm>

        <DeleteButton onClick={handleDeleteUser}>
          DELETE ACCOUNT
        </DeleteButton>
      </StyledInfo>

      <InfoMessage>
        Please contact Customer Service if you have questions about your account, or if you are not seeing transactions that should have been posted.
      </InfoMessage>
    </InfoContainer>
  )
}
