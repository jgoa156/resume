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
		max-width: 1280px;
		
		padding: 50px 50px 50px;

		@media (max-width: 1024px) {
			padding: 50px 50px 30px;
		}
		@media (max-width: 575px) {
			padding: 50px;
		}
	}
`;

export const ItemWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 110px);
	justify-content: center;
	align-items: center;

	padding: 50px 0 0px;

	@media (max-width: 1024px) {
    padding: 30px 0 0px;
		grid-template-columns: repeat(6, 80px);
	}
	@media (max-width: 575px) {
    padding: 50px 0 0;
		grid-template-columns: repeat(3, 90px);
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
		transition: 0.3s;

		@media (max-width: 1024px) {
			width: 40px;
			margin-bottom: 30px;
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
		z-index: 1000;
		opacity: 0;
		padding: 10px 15px;

		background-color: var(--color-3);
		border-radius: 5px;

		transition: 0.3s;

		@media (max-width: 575px) {
			top: calc(50% + 15px);
		}
	}
	div:hover + label {
		opacity: 1;
	}
`;