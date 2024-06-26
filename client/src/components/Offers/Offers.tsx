import { PrimaryButton } from "../Buttons/PrimaryButton/PrimaryButton";
import { StyledOffers, OffersHeader } from "./styles";

export const Offers = () => {

  return (
    <StyledOffers>
      <OffersHeader>EXCLUSIVE OFFERS FOR YOU</OffersHeader>
      <PrimaryButton text="CHECK NOW"/>
    </StyledOffers>
  )
}
