import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
	const currentUser = React.useContext(CurrentUserContext);
	// Check if the current user is the owner of the card
	const isOwn = props.card.owner._id === currentUser._id;

	// Check if the card was liked by the current user
	const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

	// Set `className` for the delete button
	const cardDeleteButtonClassName = `card__delete-button ${isOwn ? '' : 'card__delete-button_hidden'}`;

	// Set `className` for the like button
	const cardLikeButtonClassName = `card__like-button ${isLiked ? 'card__like-button_active' : ''}`;

	// Set the total number of likes for the card
	const likesLength = props.card.likes.length;

	function handleCardClick() {
		props.onCardClick(props.card);
	}

	function handleLikeClick(e) {
		e.stopPropagation();
		e.preventDefault();
		props.onCardLike(props.card);
	}

	function handleDeleteClick(e) {
		e.stopPropagation();
		e.preventDefault();
		props.onCardDelete(props.card);
	}

	return (
		<li className="card">
			<button
				onClick={handleDeleteClick}
				className={cardDeleteButtonClassName}
				title="button that deletes card"
			></button>
			<img onClick={handleCardClick} src={props.card.link} alt={props.card.name} className="card__image" />
			<div className="card__content">
				<div className="card__content_place_left">
					<h3 className="card__title">{props.card.name}</h3>
				</div>
				<div className="card__content_place_right">
					<button
						onClick={handleLikeClick}
						className={cardLikeButtonClassName}
						title="button that likes card"
					></button>
					<p className="card__likes">{likesLength}</p>
				</div>
			</div>
		</li>
	);
}

export default Card;
