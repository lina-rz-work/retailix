import styled from "styled-components";

export const DivideLine = styled.div`
  display: block;
  background: #d8d8d8;
  height: 1px;
  width: 100%;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
`

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`

export const FooterLinksContainer = styled.div`
  display: flex;
  gap: 90px;
  width: 100%;
  box-sizing: border-box;
  list-style: none;
  font-size: 15px;
  font-family: "PT Sans", sans-serif;
  padding: 0 150px;
  margin-bottom: 40px;
  margin-top: 30px;
`

export const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 14px;
  color: #000;

  hr {
    border: 0;
    border-bottom: 1px solid #34271291;
    width: 100%;
  }
`
