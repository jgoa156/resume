import styled from 'styled-components';

export const TentaclesWrapper = styled.header`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	& > div {
		width: 100%;
		max-width: 1920px;
		position: relative;

		.tentacles {
			width: 450px;
			height: auto;
			position: absolute;
			bottom: 0;
			left: 0;
			z-index: -1;
			
			color: var(--color-3);
		}
	}
`;