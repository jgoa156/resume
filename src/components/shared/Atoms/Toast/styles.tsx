import styled from 'styled-components';

const colors = {
	success: "var(--success)",
	danger: "var(--danger)"
}

export const Toast = styled.div`
	position: fixed;
	right: 15px;
	bottom: 15px;
	z-index: 9999;

	min-width: 30%;
	width: fit-content;
	border-radius: 5px;
	padding: 15px;
	padding-right: 30px;

	background-color: white;
	border-left: 5px solid;
	border-color: ${props =>
		props.type == 'success'
		? colors.success
		: colors.danger};

	transition: 0.3s;
	animation: fade-in 0.3s, fade-out 0.3s;
	animation-delay: 0s, 3.3s;

	@keyframes fade-in {
		0% {
			transform: translateY(calc(100% + 15px));
		}
		100% {
			transform: translateY(0);
		}
	}

	@keyframes fade-out {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(calc(100% + 15px));
		}
	}

	h5 {
		margin-bottom: 10px;
		font-weight: bold;
		font-size: 16px;

		color: ${props =>
			props.type == 'success'
			? colors.success
			: colors.danger};

		@media only screen and (max-width: 575px) {
			font-size: 14px;
		}
	}
	p {
		font-size: 14px;
		color: white;

		@media only screen and (max-width: 575px) {
			font-size: 12px;
		}
	}
`;
