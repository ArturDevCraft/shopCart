import { Component } from 'react';
import classes from './Header.module.css';

import { ReactComponent as Logo } from '../assets/logo.svg';

class Header extends Component {
	render() {
		return (
			<header className={classes.header}>
				<div className={classes.logo}>
					<Logo />
				</div>

				<h1 className={classes.title}>Your the best shopping place</h1>

				<div className={classes.uiActions}></div>
			</header>
		);
	}
}

export default Header;
