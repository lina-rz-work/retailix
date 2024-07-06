import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { StyledCartItem, ProductInfo, StyledLink, CartImage, ProdName, Details, Param, PriceContainer, NewPrice } from './styles';
import { setActiveMenuItem } from '../../features/navbar/navbarSlice';
import { RootState } from '../../store/store';

interface OrderProductInfoProps {
  id: number;
  quantity: number;
  size: string;
}

export const OrderProductInfo: React.FC<OrderProductInfoProps> = ({ id, quantity, size }) => {
  const allProducts = useSelector((state: RootState) => state.products.allProducts);
  const dispatch = useDispatch();

  const prod = allProducts.find(prod => prod.id === id);
  if (!prod) {
    return null;
  }

  return (
    <StyledCartItem>
      <StyledLink to={`/product/${prod.id}`}>
        <CartImage src={prod.images[0].url} alt="" onClick={() => dispatch(setActiveMenuItem(prod.category))}/>
      </StyledLink>

      <ProductInfo>
        <ProdName onClick={() => dispatch(setActiveMenuItem(prod.category))}>
          <Link to={`/product/${prod.id}`}>{prod.name}</Link>
        </ProdName>

        <Details>
          {['Size', `${size}`, 
            'Style #:', `${prod.style.slice(3)}`, 
            'Color', `${prod.color}`, 
            'Quantity', `${quantity}`].map((param, index) => (
            <Param key={index}>{param}</Param>
          ))}
        </Details>

        <PriceContainer>
          <NewPrice>Price: ${(prod.newPrice * quantity).toFixed(2)}</NewPrice>
        </PriceContainer>
      </ProductInfo>
    </StyledCartItem>
  )
}
