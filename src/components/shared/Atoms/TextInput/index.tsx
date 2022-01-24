import React, { useState } from "react";
import InputMask from "react-input-mask";

import { InputWrapper, FloatingLabel, AlertLabel, Input } from "./styles";

export default function TextInput({
	label,
	value,
	handleValue,
	mask = null,
	maskChar = null,
	required = false,
	validate = e => {
		return true;
	},
	alert = "",
	displayAlert = !!(alert.length != 0 || required),
	...props
}) {
	const [focused, setFocused] = useState(false);
	const [verified, setVerified] = useState(false);
	const [empty, setEmpty] = useState(true);
	const [valid, setValid] = useState(false);

	function handleAndValidate(e) {
		setVerified(true);
		const valueTemp = e.target.value;

		handleValue(valueTemp);

		const emptyTemp = required && valueTemp.length == 0;
		setEmpty(emptyTemp);
		setValid(!emptyTemp && validate(valueTemp));
	}

	return (
		<InputWrapper>
			{mask != null ? (
				<InputMask
					value={value}
					onChange={e => handleAndValidate(e)}
					mask={mask}
					maskChar={maskChar}
					onFocus={() => setFocused(true)}
					onBlur={() => setFocused(false)}
				>
					{inputProps => (
						<Input
							verified={
								displayAlert
									? true
									: required
										? verified
										: value.length != 0
											? verified
											: false
							}
							focused={focused}
							valid={valid}
							{...props}
							{...inputProps}
						/>
					)}
				</InputMask>
			) : (
				<Input
					value={value}
					onChange={e => handleAndValidate(e)}
					onFocus={() => setFocused(true)}
					onBlur={() => setFocused(false)}
					verified={
						displayAlert
							? true
							: required
								? verified
								: value.length != 0
									? verified
									: false
					}
					focused={focused}
					valid={valid}
					{...props}
				/>
			)}

			<FloatingLabel>{label}</FloatingLabel>
			<AlertLabel>
				{displayAlert
					? empty
						? "Required"
						: !valid
							? alert
							: ""
					: ""}
			</AlertLabel>
		</InputWrapper>
	);
}
