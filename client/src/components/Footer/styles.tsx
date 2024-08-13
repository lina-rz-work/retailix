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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10%;
  width: 100%;
  box-sizing: border-box;
  list-style: none;
  font-size: 15px;
  font-family: "PT Sans", sans-serif;
  padding: 0 10%;
  margin-bottom: 40px;
  margin-top: 30px;

  @media(max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    gap: 5%;
    padding: 0 20%;
  }

  @media(max-width: 500px) {
    grid-template-columns: 1fr 1fr;
    gap: 5%;
    padding: 0 7%;
    font-size: 13px;
  }

  @media(max-width: 350px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 0px 20%;
  }
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

  @media(max-width: 500px) {
    text-align: center;

    p {
      padding: 0 10px;
    }
  }
`
