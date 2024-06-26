import styled from "styled-components";

export const StyledBreadcrumbs = styled.ul`
  display: flex;
  list-style: none;
  font-family: "PT Sans",sans-serif;
  font-size: 14px;
  color: rgb(105, 105, 105);
  padding-left: 0;
  margin-bottom: 20px;

  li {
    margin-right: 5px;
    margin-left: 5px;
  }
  
  li:first-child {
    margin-left: 0;
  }
`

export const ListElem = styled.li`
  position: relative;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    color: #171717;
  }

  &&::after {
    content: "";
    position: absolute;
    display: block;
    height: 1px;
    width: 0%;
    background-color: #171717;
    left: 0;
    bottom: 0;
    transition: all .3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`

export const ListElemProdName = styled.li`
  font-size: 14px;
  color: rgb(105, 105, 105);
  color: inherit;
`
