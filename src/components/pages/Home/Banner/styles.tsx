import styled from "styled-components";
import { Dropdown as BootstrapDropdown } from "react-bootstrap";
import SectionWrapper from "components/shared/SectionWrapper";
import { GoToTop } from "components/shared/Header/styles";

const height = {
  "desktop": "650px",
  "tablet": "550px",
  "mobile": "650px"
};

const offset = {
  "desktop": "300px",
  "tablet": "250px",
  "mobile": "200px"
}

export const BannerWrapper = styled(SectionWrapper)`
	height: ${height.desktop};
	flex-direction: column;

  // border-bottom: 1px solid var(--color-2);

	z-index: 5;

	& > div:nth-child(2) {
		width: 100%;
		max-width: 1280px;
		position: absolute;
		top: 0;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 1024px) {
		height: ${height.tablet};
	}
	@media (max-width: 575px) {
		height: ${height.mobile};
	}
`;

export const BackgroundWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;
	width: 100%;
	height: 100%;

	overflow-x: hidden;
	box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);

	& > div:nth-child(2) {
		width: 100%;
		max-width: 1280px;
		position: absolute;
		top: 0;
	}

  background: black url("../img/bg_pattern2.png") repeat scroll top right;
	animation: slide 80s linear infinite;

  @keyframes slide {
    from {
      background-position: 50% 0;
    }
    to {
      background-position: 0 0;
    }
  }
`;
export const Background = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	/* object-position: 50% ${props => props.parallaxY}; */
	filter: brightness(35%);

	transition: 0.8s;

  @media (max-width: 575px) {
		/* object-position: 60% ${props => props.parallaxY}; */
	}

  animation: slide 20s linear infinite;

  @keyframes slide {
    from {
      object-position: 0 0;
    }
    to {
      object-position: 0 100%;
    }
  }
`;

export const Intro = styled.div`
	width: 100%;
	position: relative;
	top: calc(${height.desktop} - (10rem + ${offset.desktop}));

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 100px;
	
	h1 {
		font-size: 5rem;
		font-family: "Parkson";
	}

	@media (max-width: 1024px) {
		padding: 0 50px;
		top: calc(${height.tablet} - (10rem + ${offset.tablet}));
		
		h1 {
			font-size: 4rem;
		}
	}
	@media (max-width: 575px) {
		top: calc(${height.mobile} - (10rem + ${offset.mobile}));
		
		h1 {
			font-size: 3rem;
		}
	}
`;
export const AnimatedTitle = styled.span`
	position: absolute;
	top: 1.2 * (5rem);
	transform: translateY(0%);
	color: var(--primary-color);

	transition: 0.3s;

	&:after {
		color: white;
		content: "_";

		animation: 1s blinking infinite steps(1, end);

		@keyframes blinking {
			50% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
	}
`;

export const Dropdown = styled(BootstrapDropdown)`
  margin-top: 30px;
`;
export const DownloadDropdown = styled(BootstrapDropdown.Toggle)`
	padding: 10px 45px 10px 45px;
	border-radius: 30px;

	background-color: var(--color-3) !important;
	border: none;
	outline: none;
	color: white;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4) !important;

	transition: 0.3s;

	i {
		margin-right: 10px;
	}
	&:after {
		margin-left: 10px;
	}

	&:hover {
		background-color: #222 !important;
	}
	&:focus {
		background-color: var(--color-2) !important;
	}
`;

export const DownloadDropdownMenu = styled(BootstrapDropdown.Menu)`
	background-color: var(--color-3);
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
`;
export const DownloadDropdownItem = styled(BootstrapDropdown.Item)`
	color: var(--text-default-color);
	transition: 0.3s;

	&:hover {
		color: var(--text-default-color);
		background-color: var(--color-2);
	}

	@media (max-width: 1024px) {
		padding: 10px 20px;
	}
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 3px;

  background-color: var(--color-2);
  content: "";
`;

export const GoToBottom = styled(GoToTop)`
  position: relative;
  bottom: -50px;
  right: 0;
  align-self: center;
  transform: rotate(180deg);
`;