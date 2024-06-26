import React from "react";
import { DivideLine, StyledFooter, FooterLinksContainer, SocialLinks, Copyright } from "./styles";
import { legalLinks, assistanceLinks, companyLinks, followLinks } from "./socialLinks";
import { socialLinks } from "./socialLinks";

import { FooterLinks } from "../FooterLinks/FooterLinks";

export const Footer: React.FC = () => {

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <StyledFooter>
      <DivideLine />  

      <FooterLinksContainer>
        <FooterLinks links={legalLinks} header={'Legal and Cookies'}/>
        <FooterLinks links={assistanceLinks} header={'Assistance'}/>
        <FooterLinks links={companyLinks} header={'Company'}/>
        <FooterLinks links={followLinks} header={'Follow'}/>
      </FooterLinksContainer>

      {/* <SocialLinks>
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href} onClick={handleClick}>
            <i className={link.iconClass}></i>
          </a>
        ))}
      </SocialLinks> */}

      <Copyright>
        {/* <hr /> */}
        <p>Copyright © 2024 RETAILIX. All rights reserved.</p>
      </Copyright>
    </StyledFooter>
  )
}
