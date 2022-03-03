import styled from "styled-components";

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
			padding: 50px 20px 70px;
		}

		& > div {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
`;

export const Card = styled.div`
	width: 30%;
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-top: 10px;
	padding: 30px 20px;
	border-radius: 10px;

	background-color: var(--color-3);
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

	@media only screen and (max-width: 1024px) {
		width: 50%;
	}
	@media only screen and (max-width: 575px) {
		width: 100%;
	}
`;

export const Or = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	margin: 20px 0;

	span {
		padding: 10px 5px;
		color: var(--muted);
		font-size: 1.4rem;
		font-family: "Parkson";
	}
	&:before {
		content: "";
		width: 30px;
		height: 1px;
			
		background-color: var(--muted);
	}
	&:after {
		content: "";
		width: 30px;
		height: 1px;
		
		background-color: var(--muted);
	}
`;

export const QR = styled.img`
	width: 150px;
	height: auto;
`;

export const Link = styled.div`
	display: flex;
	align-items: center;

	a {
		margin: 0 15px;
		margin-right: 20px;

		color: white;
		font-size: 1.8rem;

		transition: 0.3s;

		&:hover {
			color: var(--primary-color);
		}

		@media (max-width: 768px) {
			margin: 0 12.5px;

			font-size: 1.6rem;
		}
	}
	
	span {
		color: var(--text-default-lighter-color);
	}
`;