import styled from 'styled-components';
import SectionWrapper from 'components/shared/SectionWrapper';

export const ProjectsWrapper = styled(SectionWrapper)`
	& > div {
		padding: 120px 50px 0;

		@media (max-width: 1024px) {
			padding: 120px 65px 50px;
		}

		@media (max-width: 575px) {
			padding: 120px 20px 0;
		}
	}
`;

export const ItemWrapper = styled.div`
	width: 100%;
	margin: auto;

	display: grid;
	grid-gap: 45px;
	grid-template-columns: repeat(3, 1fr);

	@media (max-width: 1024px) {
		width: 100%;
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 575px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const Link = styled.a`
	text-decoration: none;
`;
export const Item = styled.div`
	position: relative;
	width: 100%;
	height: 100%;

	background-color: var(--color-3);
	border-radius: 8px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

	transition: 0.3s;

	img {
		width: 100%;
		height: 150px;

		border-radius: 8px 8px 0 0;
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
		object-fit: cover;
    object-position: top;
	}

	& > div {
		height: calc(100% - 150px);

		padding: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		text-align: center;

		h4 {
      span {
        padding: 2px 5px;
        margin-right: 5px;
        vertical-align: middle;

        border: 1px solid var(--muted);
        border-radius: 5px;
        font-size: 0.825rem;
        color: var(--muted);
      }

			color: var(--text-default-color);
			font-size: 1rem;
      margin-top: 5px;
      margin-bottom: 1rem;
		}

		p {
			color: var(--muted);
			font-size: 0.875rem;
		}
	}

	&:hover {
		transform: scale(1.05);
	}
`;

export const DisclaimerWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	& > div {
		width: 100%;
	}
`;
export const Disclaimer = styled.div`
	width: 50%;

	margin-top: 30px;

	color: var(--muted);

	@media (max-width: 1024px) {
		width: 75%;
	}

	@media (max-width: 575px) {
		width: 100%;
	}

	span {
		color: var(--text-default-color);
	}
`;