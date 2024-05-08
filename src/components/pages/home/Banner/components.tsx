import styled from "styled-components";
import { Dropdown } from "react-bootstrap";

export const SectionWrapper = styled.section`
	width: 100%;
	height: 500px;
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

  border-bottom: 1px solid var(--color-2);

	z-index: 5;

	& > div:nth-child(2) {
		width: 100%;
		max-width: 1920px;
		position: absolute;
		top: 0;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 1024px) {
		height: 400px;
	}
	@media (max-width: 575px) {
		height: 500px;
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
		max-width: 1920px;
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
export const Profile = styled.img`
	position: absolute;
	top: 125px;
	right: 150px;

	width: 350px;
	height: 350px;
	object-fit: cover;
	filter: brightness(85%);

	border-radius: 50%;
	padding: 7.5px;
	border: 1px solid white;
	box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);

	transition: 0.8s;

	@media (max-width: 1024px) {
		top: 150px;
		right: 30px;

		width: 200px;
		height: 200px;
	}
	@media (max-width: 575px) {
		position: absolute;
		
		top: 50px;
		right: calc(50% - 93.75px);

		width: 180px;
		height: 180px;
	}
`;

export const Intro = styled.div`
	width: 100%;
	position: relative;
	top: calc(500px - (10rem + 200px));
	left: 100px;
	
	h1 {
		font-size: 5rem;
		font-family: "Parkson";
	}

	@media (max-width: 1024px) {
		left: 50px;
		top: calc(400px - (10rem + 150px));
		
		h1 {
			font-size: 4rem;
		}
	}
	@media (max-width: 575px) {
		left: 50px;
		top: calc(500px - (10rem + 100px));
		
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

export const Links = styled.div`
	margin-top: 20px;
`;

export const DownloadDropdown = styled(Dropdown.Toggle)`
	margin-top: 30px;

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

	@media (max-width: 575px) {
		width: calc(100% - 100px);
	}
`;

export const DownloadDropdownMenu = styled(Dropdown.Menu)`
	background-color: var(--color-3);
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
`;
export const DownloadDropdownItem = styled(Dropdown.Item)`
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

export const Link = styled.a`
	margin-right: 30px;

	color: var(--muted);
	font-size: 1.5rem;

	transition: 0.3s;

	&:hover {
		color: var(--text-default-lighter-color);
	}

	@media (max-width: 768px) {
		margin-right: 25px;

		font-size: 1.3rem;
	}
`;