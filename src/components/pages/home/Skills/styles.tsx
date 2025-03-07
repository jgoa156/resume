import styled from 'styled-components';

export const CardsWrapper = styled.div`
	position: relative;
	overflow-x: hidden;
	padding: 0 20px;
	scroll-behavior: smooth;

	/* Hiding scrollbar */
	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}

	& > div {
		width: calc(380px * 8);
		display: flex;
	}

	@media (max-width: 768px) {
		overflow-x: auto;

		& > div {
			width: calc(310px * 8);
		}
	}
`;

export const SkillCard = styled.div`
	position: relative;
	width: 350px;
	margin: 0 15px;

	h5 {
		padding: 0 5px 15px;

		color: var(--primary-color);
		font-family: "Parkson";
		font-size: 1.8rem;
	}

	@media (max-width: 768px) {
		width: 280px;
	}
`;

export const Skill = styled.div`
	display: flex;
	flex-direction: column;

	margin-bottom: 30px;
	background-color: var(--color-3);
	border-radius: 8px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
	
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

		background-image: linear-gradient(to right, var(--primary-color), var(--primary-color-2));
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
	}

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ButtonsWrapper = styled.div`
	position: relative;
`;
export const ButtonNavigator = styled.button`
	position: absolute;
	bottom: 250px;
	height: 50px;
	width: 50px;

	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 1.4rem;
	color: #666;
	background-color: #33333366;
	border-radius: 50%;
	outline: none;
	border: none;

	transition: 0.3s;

	&:hover {
		background-color: #44444466;
	}
`;

export const ButtonLeft = styled(ButtonNavigator)`
	left: 20px;

	content: "A";
`;

export const ButtonRight = styled(ButtonNavigator)`
	right: 20px;

	content: "A";
`;