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
		
		padding: 120px 50px 0;

		@media (max-width: 768px) {
			padding: 120px 0 0;
		}
	}
`;

export const ItemWrapper = styled.div`
	width: 85%;
	margin: auto;

	@media (max-width: 575px) {
		width: 100%;
	}
`;

export const Item = styled.div`
	width: 100%;
	position: relative;

	margin-bottom: 30px;
`;
export const ItemTitle = styled.button`
	width: 100%;
	display: flex;
	align-items: center;

	padding: 10px 20px;

	color: white;
	background-color: transparent;
	text-align: left;
	outline: none;
	border: none;

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

			i {
				padding-top: 15px;
				float: right;
				font-size: 1rem;
			}
		}
		p {
			margin-bottom: 0;
			span {
				padding-left: 10px;
				color: var(--text-default-lighter-color);
			}
		}
	}

	&:hover {
		div.textWrapper {
			h5 {
				color: var(--primary-color-2);
			}
		}
	}
`;

export const ItemDescription = styled.div`
	margin-left: 39px;
	padding-left: 45px;
	margin-right: 40px;

	border-left: 1px solid var(--primary-color);

	p.details {
		color: var(--text-default-lighter-color);
		margin-bottom: 15px;
	}

	h6 {
		color: var(--primary-color);
	}
	p:not(.details) {
		a {
			color: var(--primary-color);
			text-decoration: none;
			transition: 0.3s;

			&:hover {
				color: var(--primary-color-2);
			}
		}
	}
`;