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
		
		padding: 100px 50px;

		@media (max-width: 768px) {
			padding: 50px;
		}
	}
`;

export const ItemWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 110px); 
	justify-content: center;
	align-items: center;

	margin-top: 30px;
`;

export const Item = styled.div`
	width: 100%;
	position: relative;
	
	display: flex;
	justify-content: center;
	margin-bottom: 50px;

	img {
		width: 50px;
		height: auto;
		transition: 0.2s;
	}
`;