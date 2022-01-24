import styled from 'styled-components';

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