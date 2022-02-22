import React from "react";
import './form-input.styles.scss'

const FormInput = ({handleChange, label, ...otherProps}) => {
	return (
		<div className="form-input">
			<input className="form-input__value" onInput={handleChange} autoComplete='off' {...otherProps} />
			{label && <label className={`${otherProps.value.length && 'shrink'} form-input__label`}>{label}</label>}
		</div>
	)
}

export default FormInput;