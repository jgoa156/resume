import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import Title from "components/shared/Atoms/Title";
import FadeIn from "components/shared/Animations/FadeIn";
import Spinner from "components/shared/Atoms/Spinner";
import TextInput from "components/shared/Atoms/TextInput";
import {
	SectionWrapper,

	FormWrapper,
	Form,
	Send
} from "./components";

export default function AboutMe() {
	const isMobile = useMediaQuery({
		query: "(max-width: 576px)"
	});
	const [fetching, setFetching] = useState(false);
	const [sent, setSent] = useState(false);
	const [success, setSuccess] = useState(false);

	// Name
	const [name, setName] = useState("");
	const handleName = value => {
		setName(value);
	};

	// Message
	const [message, setMessage] = useState("");
	const handleMessage = value => {
		setMessage(value);
	};

	// Validating all fields
	function verifyAll() {
		return (
			name.length != 0 &&
			message.length != 0
		);
	}
	// Reset form
	function resetForm() {
		setSent(false);
		setName("");
		setMessage("");
	}
	// Send
	function send(e) {
		e.preventDefault();
		setSent(true);
	}

	return (
		<SectionWrapper id="contact-me">
			<div>
				<FadeIn>
					<Title>Contact Me</Title>
				</FadeIn>

				<FormWrapper>
					<Form>
						<TextInput
							label={"Name*"}
							name={"name"}
							value={name}
							handleValue={handleName}
							required={true}
							displayAlert={sent}
						/>
						<TextInput
							label={"Message*"}
							name={"message"}
							value={message}
							handleValue={handleMessage}
							required={true}
							displayAlert={sent}
						/>

						<Send
							type="button"
							onClick={(e) => send(e)}
							disabled={fetching}
						>
							{fetching ? (
								<Spinner
									style={{ alignSelf: "center" }}
									size={isMobile ? "16px" : "18px"}
									color={"var(--bb_color_primary)"}
									background={"rgba(252, 252, 48, 0.4)"}
								/>
							) : (
								"Enviar"
							)}
						</Send>
					</Form>
				</FormWrapper>
			</div>
		</SectionWrapper>
	);
}