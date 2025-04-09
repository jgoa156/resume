// Custom
import {
  LinksWrapper,
  Link
} from "./styles";

// Interfaces
export interface ILink {
  icon: string;
  text: string;
  href?: string;
}
interface ILinksProps {
  links: ILink[];
  sidenav?: boolean;
}

export default function Links({ links, sidenav = false }: ILinksProps) {
  return (
    <LinksWrapper className={sidenav ? "sidenav" : ""}>
      {links.map((link, index) => {
        return (link.href) && (
          <Link
            key={index}
            target="_blank"
            rel="noreferrer"
            href={link.href}>
            <i className={link.icon} />
          </Link>
        );
      })}
    </LinksWrapper>
  )
}