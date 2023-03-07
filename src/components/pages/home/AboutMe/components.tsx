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
		
		padding: 100px 50px 50px;

		@media (max-width: 1024px) {
			padding: 50px 20px 0;
		}
	}
`;

export const InfoWrapper = styled.div`
	width: 100%;
	display: flex;

	@media (max-width: 575px) {
		display: block;
	}

  img {
    width: 200px;
    height: 200px;
  }
`;

export const TextWrapper = styled.div`
	width: 50%;
	margin-bottom: 50px;

	${props => props.right || !props.left
    ? "text-align: left; padding-left: 50px;"
    : "text-align: right; padding-right: 50px;"
  }

	@media (max-width: 1024px) {
		${props => props.right || !props.left
    ? "padding-left: 30px;"
    : "padding-right: 30px;"
  }
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
		transition: 0.3s;
		text-decoration: none;
		
		&, &:visited, &:active, &:focus {
			color: var(--primary-color);
		}
		&:hover {
			color: var(--primary-color-2);
		}
	}
	
`;

export const Cards = styled.div`
	width: 50%;

	& > div {
		display: flex;
		justify-content: left;
	}

	margin-bottom: 30px;

	${props => props.right || !props.left
    ? "padding-left: 50px;"
    : "padding-right: 50px;"
  }

	@media (max-width: 1024px) {
		${props => props.right || !props.left
    ? "padding-left: 30px;"
    : "padding-right: 30px;"
  }
	}

	@media (max-width: 575px) {
		width: 100%;
		display: flex;
		justify-content: center;

		padding-left: 0;
		padding-top: 20px;
		padding-bottom: 10px;

		& > div {
			display: flex;
			justify-content: space-between;
			gap: 30px;
		}
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
	
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);

	h2 {
		font-family: "Roboto";
		font-size: 3rem;
		color: var(--primary-color);
	}

	@media (max-width: 575px) {
		margin: 0;
	}
`;

export const ItemWrapper = styled.div`
`;

export const Item = styled.div`
	width: 100%;
	position: relative;

	margin-bottom: 30px;
`;
export const ItemTitle = styled.div`
	width: 100%;
	display: flex;
	align-items: center;

	color: white;

	transition: 0.3s;

	img {
		width: 40px;
		height: auto;
		transition: 0.3s;
	}
	div.textWrapper {
		width: 100%;
		margin-left: 25px;

		h5 {
			font-family: "Parkson";
			font-size: 1.8rem;
			display: inline;
			margin-bottom: 0px;
			color: var(--primary-color);

			transition: 0.3s;
		}
		p {
			margin-bottom: 0;
			span {
				color: var(--text-default-lighter-color);

				@media (max-width: 575px) {
					display: block;
				}
			}
		}
	}
`;