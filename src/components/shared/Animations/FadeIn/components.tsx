import styled from "styled-components";

export const FadeInComponent = styled.div`
	opacity: ${props => props.show ? 1 : 0};
	transform: ${props => props.show
		? "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -60, 0, 1)"
		: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
	};
	transition: opacity 0.7s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 0.7s cubic-bezier(0.5, 0, 0, 1) 0.2s;
`;