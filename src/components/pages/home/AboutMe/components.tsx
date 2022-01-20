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

export const InfoWrapper = styled.div`
	width: 100%;
	display: flex;

	@media (max-width: 575px) {
		display: block;
	}
`;

/*First half*/
export const TextWrapper = styled.div`
	width: 50%;

	${props => props.right || !props.left
		? "text-align: left; padding-left: 50px;"
		: "text-align: right; padding-right: 50px;"
	}

	@media (max-width: 575px) {
		width: 100%;
		text-align: left;
		padding: 0;
	}
`;
export const Subtitle = styled.h3`
	font-family: "Parkson";
	font-size: 2.2rem;
	color: var(--primary-color);
`;
export const Text = styled.p`
	a {
		transition: 0.2s;
		text-decoration: none;
		
		&, &:visited, &:active, &:focus {
			color: var(--primary-color);
		}
		&:hover {
			color: var(--primary-color-2);
		}
	}
	
`;

/*Second half*/
export const Cards = styled.div`
	width: 50%;
	display: flex;
	justify-content: left;

	${props => props.right || !props.left
		? "padding-left: 50px;"
		: "padding-right: 50px;"
	}

	@media (max-width: 575px) {
		width: 50%;
		padding: 20px;
	}
`;

export const NumberCard = styled.div`
	width: 130px;
	height: 180px;

	padding: 15px;
	border-radius: 15px;
	background-color: var(--color-3);
	text-align: center;
	margin-right: 50px;
	
	box-shadow: 0px 0px 10px rgba(46, 46, 46, 0.4);

	h2 {
		font-size: 3rem;
		color: var(--primary-color);
	}

	p {

	}
`;