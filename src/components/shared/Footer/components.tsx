import styled from 'styled-components';

export const SectionWrapper = styled.footer`
	width: 100%;
	height: fit-content;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: black;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

	& > div {
		width: 100%;
		max-width: 1920px;
		
		padding: 15px 20px;
	}
`;

export const FooterText = styled.div`
	text-align: center;
	font-size: 1rem;
`;