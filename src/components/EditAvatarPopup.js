import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
	const avatarRef = React.useRef(0);
	const [errorMessage, setErrorMessage] = useState('');
	const showErrorMessage = errorMessage ? 'form__input-error_active' : '';
	const isSubmitButtonActive = !showErrorMessage;

	function validateLinkInput(e) {
		!e.target.validity.valid ? setErrorMessage(e.target.validationMessage) : setErrorMessage(null);
	}

	function handleSubmit(e) {
		e.preventDefault();
		props.onUpdateAvatar({
			avatar: avatarRef.current.value,
		});
	}

	return (
		<PopupWithForm
			name="avatar"
			title="Edit avatar"
			isOpen={props.isOpen}
			onClose={props.onClose}
			onSubmit={handleSubmit}
			isSubmitButtonActive={isSubmitButtonActive}
			submitText={props.submitText}
		>
			<label className="form__label" htmlFor="avatar-input">
				<input
					type="url"
					ref={avatarRef}
					className="form__input form__input_avatar"
					id="avatar-input"
					name="avatar-input"
					placeholder="Avatar URL"
					aria-describedby="avatar-input-error"
					required
					onInput={validateLinkInput}
				/>
				<span className={`form__input-error ${showErrorMessage}`} id="avatar-input-error">
					{errorMessage}
				</span>
			</label>
		</PopupWithForm>
	);
}

export default EditAvatarPopup;
