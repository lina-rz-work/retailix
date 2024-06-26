import { LinksContainer, LinksHeader, LinksList, ListItem } from "./styles";

interface FooterLinksProps {
  header: string;
  links: { href: string; name: string }[];
}

export const FooterLinks: React.FC<FooterLinksProps> = ( props ) => {

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <LinksContainer>
      <LinksHeader>{props.header}</LinksHeader>
      <LinksList>
        {props.links.map((link, index) => (
          <ListItem key={index}>
            <a href={link.href} onClick={handleClick}>{link.name}</a>
          </ListItem>
        ))}
      </LinksList>
    </LinksContainer>
  )
}
