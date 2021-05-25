import React from 'react';

function PopupWithForm(props) {
	const isOpenClassName = props.isOpen ? 'popup_opened' : '';
	const isInactiveClassName = props.isSubmitButtonActive ? '' : 'button_inactive';

	return (
		<div className={`popup popup_type_${props.name} ${isOpenClassName}`}>
			<div className={`popup__modal popup__modal_type_form popup__modal_type_${props.name}`}>
				<button className="popup__close" title="button that closes form" onClick={props.onClose}></button>
				<h2 className="form__title">{props.title}</h2>
				<form className="form" name={props.name} onSubmit={props.onSubmit} noValidate>
					{props.children}
					<button
						className={`button button_submit ${isInactiveClassName}`}
						type="submit"
						title="button that submits form"
					>
						{props.submitText}
					</button>
				</form>
			</div>
		</div>
	);
}

export default PopupWithForm;
