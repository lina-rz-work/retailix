import { StyledNewsletter, NewsletterHeader, NewsletterDescription, NewsletterInput  } from "./styles";
import { PrimaryButton } from "../Buttons/PrimaryButton/PrimaryButton";

export const Newsletter: React.FC = () => {

  return (
    <StyledNewsletter>
      <NewsletterHeader>RECEIVE OFFERS TO YOUR EMAIL</NewsletterHeader>
      <NewsletterDescription>
        Personal offers, early access to new collections and a 5% discount
        on your first order when subscribing to the newsletter
      </NewsletterDescription>

      <NewsletterInput type="text" placeholder="E-mail"/>
      <PrimaryButton text="SUBSCRIBE"/>
    </StyledNewsletter>
  )
}
