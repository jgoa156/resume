import styled from 'styled-components';

export const SectionWrapper = styled.section`
	width: 100%;
	height: 500px;
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	z-index: 5;

	& > div {
		width: 100%;
		max-width: 1920px;
		position: absolute;
		top: 0;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 575px) {
		height: 450px;
	}
`;

export const Background = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: 50% ${props => props.parallaxY};
	filter: brightness(30%);

	transition: 0.8s;
`;

export const Intro = styled.div`
	width: 100%;
	position: relative;
	top: calc(500px - (10rem + 150px));
	left: 100px;
	
	h1 {
		font-size: 5rem;
		font-family: "Parkson";
	}

	@media (max-width: 575px) {
		left: 50px;
		top: calc(500px - (10rem + 100px));
		
		h1 {
			font-size: 3rem;
		}
	}
`;
export const AnimatedTitle = styled.span`
	position: absolute;
	top: 1.2 * (5rem);
	transform: translateY(0%);
	color: var(--primary-color);

	transition: 0.3s;

	&:after {
		color: white;
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

export const Links = styled.div`
	margin-top: 20px;
`;

export const Link = styled.a`
	margin-right: 30px;

	color: white;
	font-size: 1.8rem;

	transition: 0.2s;

	&:hover {
		color: var(--primary-color);
	}

	@media (max-width: 768px) {
		margin-right: 25px;

		font-size: 1.6rem;
	}
`;