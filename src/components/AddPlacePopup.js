import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
	const [name, setName] = useState('');
	const [link, setLink] = useState('');
	const [nameInputErrorMessage, setNameInputErrorMessage] = useState('');
	const [linkInputErrorMessage, setLinkInputErrorMessage] = useState('');
	const showNameInputError = nameInputErrorMessage ? 'form__input-error_active' : '';
	const showLinkInputError = linkInputErrorMessage ? 'form__input-error_active' : '';
	const isSubmitButtonActive = !showNameInputError && !showLinkInputError;

	function handleNameChange(e) {
		setName(e.target.value);
	}

	function handleLinkChange(e) {
		setLink(e.target.value);
	}

	function validateNameInput(e) {
		!e.target.validity.valid ? setNameInputErrorMessage(e.target.validationMessage) : setNameInputErrorMessage('');
	}

	function validateLinkInput(e) {
		!e.target.validity.valid
			? setLinkInputErrorMessage(e.target.validationMessage)
			: setLinkInputErrorMessage(null);
	}

	function handleSubmit(e) {
		// Prevent the browser from navigating to the form address
		e.preventDefault();

		// Pass the values of the managed components to the external handler
		props.onAddPlace({
			name: name,
			link: link,
		});
	}

	return (
		<PopupWithForm
			name="add-place"
			title="Add place"
			isOpen={props.isOpen}
			onClose={props.onClose}
			onSubmit={handleSubmit}
			isSubmitButtonActive={isSubmitButtonActive}
			submitText={props.submitText}
		>
			<fieldset className="form__set">
				<label className="form__label" htmlFor="title-input">
					<input
						type="text"
						value={name}
						onChange={handleNameChange}
						className="form__input form__input_title"
						id="title-input"
						name="title-input"
						placeholder="Title"
						required
						minLength="1"
						maxLength="30"
						aria-describedby="title-input-error"
						onInput={validateNameInput}
					/>
					<span className={`form__input-error ${showNameInputError}`} id="title-input-error">
						{nameInputErrorMessage}
					</span>
				</label>
				<label className="form__label" htmlFor="url-input">
					<input
						type="url"
						value={link}
						onChange={handleLinkChange}
						className="form__input form__input_url"
						id="url-input"
						name="url-input"
						placeholder="Image URL"
						required
						aria-describedby="url-input-error"
						onInput={validateLinkInput}
					/>
					<span className={`form__input-error ${showLinkInputError}`} id="url-input-error">
						{linkInputErrorMessage}
					</span>
				</label>
			</fieldset>
		</PopupWithForm>
	);
}

export default AddPlacePopup;
