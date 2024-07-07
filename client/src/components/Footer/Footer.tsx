import { DivideLine, StyledFooter, FooterLinksContainer, Copyright } from "./styles";
import { legalLinks, assistanceLinks, companyLinks, followLinks } from "./socialLinks";
import { FooterLinks } from "../FooterLinks/FooterLinks";

export const Footer: React.FC = () => {

  return (
    <StyledFooter>
      <DivideLine />  

      <FooterLinksContainer>
        <FooterLinks links={legalLinks} header={'Legal and Cookies'}/>
        <FooterLinks links={assistanceLinks} header={'Assistance'}/>
        <FooterLinks links={companyLinks} header={'Company'}/>
        <FooterLinks links={followLinks} header={'Follow'}/>
      </FooterLinksContainer>

      <Copyright>
        <p>Copyright © 2024 RETAILIX. All rights reserved.</p>
      </Copyright>
    </StyledFooter>
  )
}
