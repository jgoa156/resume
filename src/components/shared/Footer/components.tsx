import styled from 'styled-components';

export const SectionWrapper = styled.footer`
	width: 100%;
	height: fit-content;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: black;

	& > div {
		width: 100%;
		max-width: 1920px;
		
		padding: 15px 20px;
	}
`;

export const FooterText = styled.div`
	text-align: right;
	font-size: 1rem;
`;