import styled from 'styled-components';

export const FooterWrapper = styled.footer`
	width: 100%;
	height: fit-content;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: black;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  border-top: 1px solid var(--color-2);

	& > div {
		width: 100%;
		max-width: 1280px;
		
		padding: 15px 20px;
	}
`;

export const FooterText = styled.div`
	text-align: center;
	font-size: 1rem;
`;