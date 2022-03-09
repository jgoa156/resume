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

		@media (max-width: 1024px) {
			padding: 50px 20px 50px;
		}
	}
`;

export const ItemWrapper = styled.div`
	width: 80%;
	margin: auto;

	display: grid;
	grid-gap: 45px;
	grid-template-columns: repeat(3, 1fr);

	@media (max-width: 1024px) {
		width: 100%;
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
	}

	& > div {
		padding: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;

		h4 {
			color: var(--text-default-color);
			font-size: 1rem;
		}
	}

	&:hover {
		transform: scale(1.05);
	}
`;

export const TagWrapper = styled.div`
	width: 100%;
	display: flexbox;
	flex-flow: row wrap;
	justify-content: center;
`;

export const Tag = styled.div`
	margin-top: 8px;
	margin-right: 8px;
	padding: 2px 5px;

	font-size: 0.75rem;
	background-color: var(--color-1);
	color: var(--primary-color);
	border-radius: 4px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
`;