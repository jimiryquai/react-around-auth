import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
	const currentUser = React.useContext(CurrentUserContext);

	return (
		<main className="main">
			<section className="profile">
				<div className="avatar">
					<img src={currentUser.avatar} alt={currentUser.name} className="avatar__img" id="avatar" />
					<button
						className="button button_avatar"
						title="button that launches avatar editing form"
						onClick={props.onEditAvatar}
					></button>
				</div>
				<div className="profile__info">
					<h1 className="profile__name">{currentUser.name}</h1>
					<button
						className="button button_edit"
						title="button that launches profile editing form"
						onClick={props.onEditProfile}
					></button>
					<p className="profile__job">{currentUser.about}</p>
				</div>
				<button
					className="button button_add"
					title="button that launches card adding form"
					onClick={props.onAddPlace}
				></button>
			</section>
			<section className="gallery">
				<ul className="cards">
					{props.cards.map((card, index) => (
						<Card
							key={index}
							card={card}
							onCardClick={props.onCardClick}
							onCardLike={props.onCardLike}
							onCardDelete={props.onCardDelete}
						/>
					))}
				</ul>
			</section>
		</main>
	);
}

export default Main;
