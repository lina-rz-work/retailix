import { useEffect, useState } from "react";
import { StyledNewCollections, CollectionsHeader, CollectionsContainer } from "./styles";
import { Item } from "../Item/Item";
import { ProductProps } from "../../types/product";

export const NewCollections: React.FC = () => {
  const [ newCollection, setNewCollection ] = useState<ProductProps[]>([]);

  const fetchNewCollection = async () => {
    const res = await fetch('/api/products/newcollection', {
      method: 'GET',
    });

    if (!res.ok) {
      throw new Error('Server error occurred while fetching the data.');
    }

    const data = await res.json();
    setNewCollection(data);
  }

  useEffect(() => {
    fetchNewCollection();
  }, []);

  return (
    <StyledNewCollections>
      <CollectionsHeader>NEW COLLECTIONS</CollectionsHeader>
      <CollectionsContainer>
        {newCollection.map(product => {
          return <Item key={product.id} {...product}/>
        })}
      </CollectionsContainer>
    </StyledNewCollections>
  )
}
