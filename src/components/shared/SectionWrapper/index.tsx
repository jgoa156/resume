import styled from "styled-components";

const SectionWrapper = styled.section`
	width: 100%;
	height: fit-content;
	position: relative;
	overflow: hidden;

	display: flex;
	justify-content: center;
	align-items: center;

	& > div {
		width: 100%;

    &:not(.no-default-styling) {
      max-width: 1280px;
		  padding: 120px 20px 0;
    }
	}
`;

export default SectionWrapper;