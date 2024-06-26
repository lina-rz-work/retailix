import styled from "styled-components";

export const StyledProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 45vh;
  font-size: 14px;

  p {
    margin-top: 0;
  }
`

export const DetailsList = styled.ul`
  list-style: none;
  width: 81.5%;
  text-align: justify;
`;

export const Detail = styled.li`
  position: relative;
  padding: 6px 0;
  padding-left: 1.5em;
  font-size: 14px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.9em;
    width: 0.2em;
    height: 0.2em;
    background-color: black;
    border-radius: 50%;
  }
`;
