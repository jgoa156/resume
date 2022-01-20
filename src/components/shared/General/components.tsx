import styled from 'styled-components';

export const TitleComponent = styled.h2`
	margin-bottom: 50px;
	
	color: white;
	font-size: 2.625rem;
	font-family: "Parkson";
	text-align: center;
	white-space: nowrap;
	overflow: hidden;

	animation: ${props => props.show
		? "fade-in-text 0.2s linear forwards"
		: "none"
	};

	@media (max-width: 768px) {
		font-size: 2.6rem;
	}

	@keyframes fade-in-text {
		0% {
			transform: translateY(200%);
		}
		100% {
			transform: translateY(0%);
		}
	};

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	&:after {
		width: 50px;
		height: 2px;
		display: block;

		background-color: var(--primary-color);
		content: "";
	};
`;