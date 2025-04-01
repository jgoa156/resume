import SectionWrapper from 'components/shared/SectionWrapper';
import styled from 'styled-components';

export const ToolsWrapper = styled(SectionWrapper)`
	& > div {
    overflow: hidden;
		padding: 50px 50px 100px;

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
	grid-template-columns: repeat(5, 110px);
  grid-gap: 50px 0;
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
`;