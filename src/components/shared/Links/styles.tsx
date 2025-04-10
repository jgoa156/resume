import styled from "styled-components";

export const Link = styled.a`
	margin-right: 30px;

	color: var(--muted);
	font-size: 1.5rem;

	transition: 0.3s;

	&:hover {
		color: var(--text-default-lighter-color);
	}

	@media (max-width: 768px) {
		margin-right: 25px;

		font-size: 1.3rem;
	}
`;

export const LinksWrapper = styled.div`
	margin-top: 20px;

  &.sidenav {
    @media (max-width: 575px) {
    float: right;

      & > ${Link} {
        margin-right: 0;
        margin-left: 25px;
      }
    }
  }
`;