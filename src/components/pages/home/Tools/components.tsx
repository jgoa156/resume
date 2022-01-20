import styled from 'styled-components';

export const SectionWrapper = styled.section`
	width: 100%;
	height: fit-content;
	position: relative;
	overflow: hidden;

	display: flex;
	justify-content: center;
	align-items: center;

	& > div {
		width: 100%;
		max-width: 1920px;
		
		padding: 50px;

		@media (max-width: 768px) {
			padding: 30px 50px 10px;
		}
	}
`;

export const ItemWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 110px);
	justify-content: center;
	align-items: center;

	margin-top: 100px;

	@media (max-width: 768px) {
		grid-template-columns: repeat(6, 80px);
	}
`;

export const Item = styled.div`
	width: 100%;
	position: relative;
	
	display: flex;
	justify-content: center;

	div {
		width: 50px;
		height: auto;
		transition: 0.2s;

		@media (max-width: 768px) {
			width: 30px;
		}
	}
	div svg:hover {
		color: ${props => props.color};
	}

	div + label {
		font-size: 0.825rem;
		width: max-content;
		position: absolute;
		top: calc(100% + 10px);
		opacity: 0;
		padding: 10px 15px;

		background-color: var(--color-3);
		border-radius: 5px;

		transition: 0.2s;
	}
	div:hover + label {
		opacity: 1;
	}
`;