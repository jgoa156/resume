import styled from 'styled-components';

// Colors
const text = {
	default: "white",
	unfocused: "white",
	focused: "var(--primary-color)",
	valid: "var(--primary-color)",
	invalid: "var(--danger)"
};
const background = {
	unfocused: "inherit",
	focused: "var(--color-1)"
};
const border = {
	unfocused: "var(--color-2)",
	focused: "var(--primary-color)",
	valid: "var(--primary-color)",
	invalid: "var(--danger)"
};

export const FloatingLabel = styled.div`
	position: absolute;
	left: 2px;

	font-weight: bold;
	transition: 0.15s;
`;

export const AlertLabel = styled.div`
	position: absolute;
	bottom: -20px; /* (fontSize + marginTop) * -1 */
	right: 2px;

	font-size: 12px;
	color: ${text.invalid};
	transition: 0.2s;
`;

export const Input = styled.input`
	&:focus-visible {
		outline: none;
	}

	width: 100%;
	height: 44px;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;

	padding: 0px 5px;
	padding-top: 15px;
	border-radius: 3px 3px 0 0;

	color: ${text.default};
	background-color: ${props =>
		props.focused ? background.focused : background.unfocused};

	border: none;
	border-bottom: 2px solid;
	border-color: ${props =>
		props.verified
			? props.valid
				? border.valid
				: border.invalid
			: props.focused
				? border.focused
				: border.unfocused};

	transition: 0.2s;

	@media only screen and (max-width: 575px) {
		height: 42px;
	}

	& + ${FloatingLabel} {
		color: ${props =>
			props.verified
				? props.valid
					? text.valid
					: text.invalid
				: props.focused
					? text.focused
					: text.unfocused};
		font-size: ${props =>
			props.focused || (props.value && props.value.length != 0)
				? `12px`
				: `16px`};
		top: ${props =>
			props.focused || (props.value && props.value.length != 0)
				? `0px`
				: `16px`};
		z-index: ${props =>
			props.focused || (props.value && props.value.length != 0) ? 3 : 1};

		@media only screen and (max-width: 575px) {
			font-size: ${props =>
				props.focused || (props.value && props.value.length != 0)
					? `12px`
					: `14px`};
			top: ${props =>
				props.focused || (props.value && props.value.length != 0)
					? `0px`
					: `14px`};
		}
	}
`;

export const InputWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 44px;
	margin-bottom: 30px;
	z-index: 0;
	
	font-size: 16px;

	&::after {
		position: absolute;
		top: 0;
		left: 0;

		height: 100%;
		width: 100%;

		transition: 0.2s;
		content: '';
		opacity: 0;
	}
	&:hover::after {
		opacity: 1;
		background-color: ${background.focused};
	}

	@media only screen and (max-width: 575px) {
		height: 42px;
		font-size: 14px;
	}
`;
