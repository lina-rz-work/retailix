import styled from "styled-components";

export const LinksContainer = styled.div`
  /* width: 25%; */
  min-width: max-content;
  max-width: 168px;
`
export const LinksHeader = styled.div`
  margin: 1.2rem 0;
  font-size: 15px;
  font-weight: 500;
`
export const LinksList = styled.div`
  padding: 0;
  list-style: none;
`
export const ListItem = styled.div`
  font-size: 14px;
  margin: 4px 0;
  color: #666;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media(max-width: 500px) {
    font-size: 13px;
  }
`