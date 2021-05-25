import React from 'react';

function ImagePopup(props) {
	return (
		<div className={`popup popup_type_image ${props.card ? 'popup_opened' : ''}`}>
			<div className="popup__modal popup__modal_type_image">
				<button className="popup__close" title="button that closes form" onClick={props.onClose}></button>
				<figure className="popup__figure">
					<img
						src={props.card && props.card.link}
						alt={props.card && props.card.name}
						className="popup__image"
					/>
					<figcaption className="popup__caption">{props.card && props.card.name}</figcaption>
				</figure>
			</div>
		</div>
	);
}

export default ImagePopup;
