import styled from 'styled-components';

export const FadeInComponent = styled.div`
	opacity: ${props => props.show ? 1 : 0};
	transform: ${props => props.show
		? "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -60, 0, 1)"
		: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
	};
	transition: opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 1.5s cubic-bezier(0.5, 0, 0, 1) 0.2s;
`;

export const TitleComponent = styled.h2`
	margin-bottom: 50px;
	
	color: white;
	font-size: 2.625rem;
	font-family: "Parkson";
	text-align: center;
	white-space: nowrap;
	overflow: hidden;

	@media (max-width: 768px) {
		font-size: 2.6rem;
	}

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