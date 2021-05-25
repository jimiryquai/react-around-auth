import React from 'react';
import { Link } from 'react-router-dom';

function Login(props) {
	const emailRef = React.useRef();
	const passwordRef = React.useRef();

	function handleSubmit(e) {
		e.preventDefault();

		props.onSignin({
			email: emailRef.current.value,
			password: passwordRef.current.value,
		});
	}

	return (
		<section className="login">
			<div className="login__container">
				<h2 className="form__title">Sign In</h2>
				<form className="form form_type_login" action="#" name="Sign In" onSubmit={handleSubmit} noValidate>
					<label className="form__label" htmlFor="email-input">
						<input
							className="form__input form__input_email form__input_theme_dark"
							id="email-input"
							type="email"
							name="email"
							title="Email"
							ref={emailRef}
							placeholder="Email"
							required
						/>
						<span className="form__input-error" id="email-input-error"></span>
					</label>
					<label className="form__label" htmlFor="password-input">
						<input
							className="form__input form__input_password form__input_theme_dark"
							id="password-input"
							type="password"
							name="password"
							title="Password"
							ref={passwordRef}
							placeholder="Password"
							required
						/>
						<span className="form__input-error" id="password-input-error"></span>
					</label>
					<button className="button button_submit button_submit_light" type="submit">
						Sign In
					</button>
				</form>
				<Link to="/signup" className="login__link">
					Not a member yet? Sign up here!
				</Link>
			</div>
		</section>
	);
}

export default Login;
