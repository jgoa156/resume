import styled from 'styled-components';

export const HeaderWrapper = styled.header`
	width: 100%;
	height: 50px;
	z-index: 10;
	position: fixed;
	top: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: ${props => props.scrolled ? `var(--color-3)` : `transparent` };
	transition: 0.5s;

	nav {
		height: fit-content;
		width: 100%;
		max-width: 1920px;
		padding: 0 20px;

		display: flex;
		justify-content: space-between;
		align-items: center;

		font-size: 1.825rem;
		font-family: "Parkson";
	}
`;

export const TitleWrapper = styled.div`
	height: fit-content;

	font-weight: bold;
	text-transform: uppercase;
`;

export const LinkWrapper = styled.div`
	height: fit-content;
	padding: 0 30px;

	a {
		padding-bottom: 6px;
		margin-left: 15px;

		font-weight: bold;
		text-transform: uppercase;
		text-decoration: none;
		border-bottom: 2px solid transparent;

		transition: 0.2s;

		&, &:visited, &:active, &:focus {
			color: white;
		}
		&:hover {
			color: var(--primary-color);
			border-color: var(--primary-color);
		}
	}
`;

export const GoToTop = styled.a`
	position: fixed;
	bottom: 25px;
	right: 25px;
	transform: translateY(calc(100% + 25px));

	background-color: transparent;
	border: none;

	font-size: 1.2rem;
	color: var(--primary-color);
	text-decoration: none;
	transition: 0.2s;

	animation: ${props => props.showGoToTop ? "fade-in 0.1s linear forwards" : "fade-out 0.1s linear forwards"};
		
	&:hover {
		color: var(--primary-color-2);
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