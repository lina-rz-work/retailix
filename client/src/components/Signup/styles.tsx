import styled from "styled-components";

interface SubmitButtonProps {
  loading: boolean
}

export const StyledSignup = styled.div`
  width: 100%;
  font-family: "PT Sans", sans-serif;
`

export const SignupHeader = styled.h2`
  font-weight: 400;
  color: #2e3131;
  font-size: 22px;
  margin-top: 0;
  margin-bottom: 40px;
`

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const SignupLabel = styled.label`
  color: #2e3131;
  font-size: 14px;
`

export const SignupInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  font-family: "PT Sans", sans-serif;
  font-size: 14px;
  letter-spacing: 0.1em;
  margin-bottom: 30px;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #000;
  color: #2e3131;
  outline: none;

  &::placeholder {
    color: #ffffff78;
    font-family: "Bodoni Cyrillic";
    font-size: 14px;
  }
`

export const PasswordWrapper = styled.div`
  display: flex;
  position: relative;

  span {
    position: absolute;
    right: 0;
    top: 8px;
  }
`

export const SubmitButton = styled.button<SubmitButtonProps>`
  display: block;
  height: auto;
  font-family: "PT Sans", sans-serif;
  font-size: 1rem;
  font-size: 14px;
  font-weight: 300;
  color: #fff;
  background-color: #000;
  border: 1px solid #171717;
  border-color: #171717;
  opacity: ${props => props.loading ? .7 : 1};
  padding: 6px 30px;
  margin-top: 20px;
  text-align: center;
  text-transform: none;
  text-decoration: none;
  transition: all .2s;
  cursor: pointer;

  &:hover {
    opacity: .7;
  }
`

export const ErrorMessage = styled.p`
  position: absolute;
  color: rgb(215, 55, 61);
  bottom: 35px;
  font-size: 13px;
  font-family: 'PT Sans', sans-serif;
`;

export const SignupMessage = styled.p`
  font-family: 'PT Sans';
  font-size: 13px;
  color:#2e3131;
  text-align: justify;

  span {
    font-weight: 700;
    cursor: pointer;
  }
`
