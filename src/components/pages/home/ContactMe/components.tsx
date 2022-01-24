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

		display: flex;
		flex-direction: column;
		align-items: center;
		
		padding: 100px 50px 50px;

		@media (max-width: 1024px) {
			padding: 50px 20px 0;
		}
	}
`;

export const FormWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px 20px;

  background-color: var(--color-3);

  @media only screen and (max-width: 620px) {
    width: 100%;
    padding: 15px 20px;
  }
`;

export const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Send = styled.button`
  min-width: 40%;
  width: fit-content;
  padding: 10px 30px;
  border-radius: 4px;

  align-self: flex-end;
  display: flex;
  justify-content: center;

  color: var(--bb_color_primary);
  background-color: var(--bb_color_secundary);
  border: none;

  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.2px;
  text-decoration: none;

  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }

  @media only screen and (max-width: 620px) {
    font-size: 14px;
    width: 100%;
    align-self: center;
    margin: 15px 0;
  }
`;
