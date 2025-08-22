import styled from 'styled-components';

export const TagWrapper = styled.div`
	width: 100%;
	display: flex;
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