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

export const CardsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 320px);
	grid-gap: 50px;
	justify-content: center;
	

	margin-top: 30px;
`;

export const SkillCard = styled.div`
	position: relative;
	width: 100%;

	h5 {
		padding: 0 5px 15px;

		color: var(--primary-color);
		font-family: "Parkson";
		font-size: 1.8rem;
	}
`;

export const Skill = styled.div`
	display: flex;
	flex-direction: column;

	margin-bottom: 30px;
	background-color: var(--color-3);
	border-radius: 8px;
	box-shadow: 0 0 10px rgba(46, 46, 46, 0.4);
	
	div {
		width: 100%;
		display: flex;
		justify-content: space-between;
		
		padding: 16px 16px 8px;
		margin-bottom: 10px;
		font-weight: bold;

		label {
		}
		span {
		}
	}
	&:after {
		content: "";
		height: 3px;
		width: ${props => `${props.proficiency}%`};

		background-color: var(--primary-color);
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;

		
	}
`;