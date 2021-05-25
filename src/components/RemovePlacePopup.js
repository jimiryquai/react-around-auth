import React from 'react';
import PopupWithForm from './PopupWithForm';

function RemovePlacePopup(props) {
	function handleSubmit(e) {
		e.preventDefault();
		props.onConfirmDelete(props.card);
	}

	return (
		<PopupWithForm
			name="delete"
			title="Are you sure?"
			isOpen={props.isOpen}
			isSubmitButtonActive={true}
			onClose={props.onClose}
			onSubmit={handleSubmit}
			submitText={props.submitText}
		></PopupWithForm>
	);
}

export default RemovePlacePopup;
