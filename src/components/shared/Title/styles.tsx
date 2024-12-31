import styled from 'styled-components';

export const TitleComponent = styled.h2<{ alignLeft?: boolean }>`
	margin-bottom: 50px;
	
	color: white;
	font-size: 2.625rem;
	font-family: "Parkson";
	white-space: nowrap;
	overflow: hidden;

	@media (max-width: 768px) {
		font-size: 2.6rem;
	}

  ${({ alignLeft }) => !alignLeft && `
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}

	&:after {
		width: 50px;
		height: 2px;
		display: block;

		background-image: linear-gradient(to right, var(--primary-color), var(--primary-color-2));
		content: "";
	};
`;