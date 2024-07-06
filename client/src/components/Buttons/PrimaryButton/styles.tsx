import styled from "styled-components"

export const StyledPrimaryButton = styled.button`
  color: #fff;
  max-width: max-content;
  font-family: Futura PT;
  font-weight: 300;
  border-color: #ffffff;
  height: auto;
  padding: 5px 30px;
  display: block;
  border: 1px solid #fff;
  text-align: center;
  background-color: transparent;
  font-size: 1rem;
  text-transform: none;
  text-decoration: none;
  transition: all .2s;
  cursor: pointer;

  &:hover {
    // opacity: .5;
    background: #ffffffa6;
    color: #000;
  }
`