import styled from "styled-components";
import { Dropdown } from "react-bootstrap";

export const HeaderWrapper = styled.header`
	width: 100%;
	height: 50px;
	z-index: 10;
	position: fixed;
	top: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: ${props => props.scrolled ? `var(--color-3)` : `transparent`};
	transition: 0.5s;
	box-shadow: ${props => props.scrolled ? `0 0 10px rgba(0, 0, 0, 0.4)` : `none`};

	nav {
    margin-top: -5px;
		height: fit-content;
		width: 100%;
		max-width: 1280px;
		padding: 0 50px;

		display: flex;
		justify-content: space-between;
		align-items: center;

    @media (max-width: 1024px) {
      padding: 0 20px;
    }
	}
`;

export const TitleWrapper = styled.div`
	height: fit-content;
  opacity: ${props => props.scrolled ? `1` : `0`};
	font-family: "Parkson";
	font-size: 1.825rem;
	font-weight: bold;

	transition: 0.3s;

  img {
    height: 25px;
    width: auto;
    object-fit: cover;

    margin-right: 10px;
  }

	&:after {
		color: ${props => props.scrolled ? `white` : `transparent`};
		content: "_";

		animation: 1s blinking infinite steps(1, end);

		@keyframes blinking {
			50% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
	}
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
`;

export const LinkWrapper = styled.div`
	height: fit-content;
	

	ul {
		margin: 0;
    padding: 0;
	}
	a {
		padding-bottom: 6px;
		margin-left: 15px;

		font-size: 1.825rem;
		font-family: "Parkson";
		font-weight: bold;
		text-transform: uppercase;
		text-decoration: none;
		border-bottom: 2px solid transparent;

		transition: 0.3s;

		&.spy {
			border-color: var(--primary-color);
		}

		&, &:visited, &:active, &:focus {
			color: white;
		}
		&:hover {
			color: var(--primary-color-2);
			border-color: var(--primary-color-2);
		}
	}
`;

export const GoToTop = styled.a`
	position: fixed;
	bottom: 15px;
	right: 15px;
	height: 50px;
	width: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: translateY(calc(100% + 25px));

	background-color: rgba(0, 0, 0, 0.7);
	border: none;
	border-radius: 50%;

	font-size: 1.2rem;
	color: var(--primary-color);
	text-decoration: none;
	transition: 0.3s;

	animation: ${props => props.showGoToTop ? "fade-in 0.1s linear forwards" : "fade-out 0.1s linear forwards"};
		
	&:hover {
		color: var(--primary-color-2);
		background-color: #161616;
	}

	@keyframes fade-in {
		0% {
			transform: translateY(calc(100% + 25px));
		}
		100% {
			transform: translateY(0%);
		}
	};

	@keyframes fade-out {
		0% {
			transform: translateY(0%);
		}
		100% {
			transform: translateY(calc(100% + 25px));
		}
	};
`;

export const Burger = styled.button`
  margin-top: 5px;
  padding-left: 15px;
	justify-self: flex-end;

	color: white;
	font-size: 1.4rem;
	background-color: transparent;
	border: none;

	transition: 0.3s;

	&:hover {
		color: var(--primary-color-2);
	}
`;

export const Sidenav = styled.div`
	position: fixed;
	z-index: 11;
	top: 0;
	right: ${props => props.show ? "0" : "-65%"};
	min-height: 150%;
	width: 45%;

	background-color: var(--color-3);
	overflow: hidden;
	word-wrap: break-word;
	white-space: nowrap;

	transition: 0.3s;

	& > div {
		padding: 0 20px;
	}

	@media (max-width: 575px) {
		width: 65%;
	}

	.buttonWrapper {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 50px;

		padding-right: 2px;

		button.close {
			color: white;
			font-size: 1.4rem;
			background-color: transparent;
			border: none;

			transition: 0.3s;

			&:hover {
				color: var(--primary-color-2);
			}
		}
	}

	${LinkWrapper} {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		padding: 0;

		a {
			width: fit-content;
			margin: 0;
		}
	}
`;

export const SidenavBackground = styled.div`
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;
	height: 150%;
	width: 100%;

	background-color: rgba(0, 0, 0, 0.5);
	opacity: ${props => props.show ? 1 : 0};

	transition: 0.3s;
`;

export const LanguageDropdown = styled(Dropdown.Toggle)`
  margin-top: 5px;
	padding: 5px 10px;
	border-radius: 5px;

	background-color: var(--color-3) !important;
	border: 1px solid var(--muted);
	outline: none;
	color: var(--muted);
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4) !important;
  font-weight: bold;
  font-size: 0.825rem;

	transition: 0.3s;

	&:after {
		display: none;
	}

	&:hover, &:focus {
    color: var(--muted);
	}
`;

export const LanguageDropdownMenu = styled(Dropdown.Menu)`
	background-color: var(--color-3);
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
`;
export const LanguageDropdownItem = styled(Dropdown.Item)`
	color: var(--text-default-color);
	transition: 0.3s;

	&:hover {
		color: var(--text-default-color);
		background-color: var(--color-2);
	}
`;