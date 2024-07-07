import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StyledItem, PictureBlock, AddButton, ChooseSize, SizeButton, ItemName, PricesContainer, NewPrice, OldPrice } from "./styles";
import { increaseItemQuantity, increaseItemQuantityServer } from "../../features/cart/cartSlice";
import { setCartVisible } from "../../features/uiState/uiStateSlice";
import { setActiveMenuItem } from "../../features/navbar/navbarSlice";
import { RootState, AppDispatch } from "../../store/store";
import { ProductProps } from "../../types/product";

export const Item: React.FC<ProductProps> = ( props ) => {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const [ clicked, setClicked ] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  
  function handleClick(size: string) {
    if (clicked) {
      const id = props.id;

      if (isAuthenticated) {
        dispatch(increaseItemQuantityServer({ id, size }));
      } else {
        dispatch(increaseItemQuantity({ id, size }));
      }

      setTimeout(() => dispatch(setCartVisible(true)), 300);
    }
  }

  return (
    <StyledItem clicked={clicked} onMouseLeave={() => setClicked(false)}>
      <PictureBlock  >
        <Link to={`/product/${props.id}`} onClick={() => dispatch(setActiveMenuItem(props.category))}>
          <img src={props.images[0].url} alt=""/>
        </Link>

        <ChooseSize clicked={clicked}>
          <p>Choose size</p>
          <div>
            {['XS', 'S', 'M', 'L', 'XL'].map(size => (
              <SizeButton key={size} onClick={() => handleClick(size)}>
                {size}
              </SizeButton>
            ))}
          </div>
        </ChooseSize>

        <AddButton 
          clicked={clicked}
          className={'add_btn'}
          onClick={() => setClicked(true)}>
          Add
        </AddButton>
      </PictureBlock>
      
      <Link to={`/product/${props.id}`}><ItemName>{props.name}</ItemName></Link>

      <PricesContainer>
        <NewPrice>${props.newPrice.toFixed(2)}</NewPrice>
        <OldPrice>${props.oldPrice.toFixed(2)}</OldPrice>
      </PricesContainer>
    </StyledItem>
  )
}
