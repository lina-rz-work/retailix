import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { StyledBreadcrumbs, ListElem, ListElemProdName } from "./styles";
import { ProductProps } from "../../types/product";
import { setActiveMenuItem } from "../../features/navbar/navbarSlice";

export const Breadcrumbs: React.FC<ProductProps> = ( product ) => {
  const formattedCategory = product.category.replace(/^\w/, (c) => c.toUpperCase());
  const dispatch = useDispatch();

  return (
    <StyledBreadcrumbs>
      <ListElem onClick={() => dispatch(setActiveMenuItem('home'))}>
        <Link to={'/'}>Home</Link>
      </ListElem>/
      <ListElem><Link to={`/${product.category}`}>{formattedCategory}</Link></ListElem>/
      <ListElemProdName>{product.name}</ListElemProdName>
    </StyledBreadcrumbs>
  )
}
