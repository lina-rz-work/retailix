import { useSelector } from "react-redux";
import { StyledNewCollections, CollectionsHeader, CollectionsContainer } from "./styles";
import { Item } from "../Item/Item";
import { RootState } from "../../store/store";

export const NewCollections: React.FC = () => {
  const { newCollection } = useSelector((state: RootState) => state.newCollection)

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
