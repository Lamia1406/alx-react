import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton_logo.jpg';
import { logout } from '../actions/uiActionCreators';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { user, logout } = this.props;
		return (
			<header className={css(styles.Header)}>
				<img src={logo} className={css(styles.HeaderLogo)} alt="logo" />
				<h1>School dashboard</h1>
				{
					user && (
						<h2 id='logoutSection'>
							Welcome <b>{user.email}</b>
							<span onClick={logout} className={css(styles.logOutSpanSection)}>
								(logout)
							</span>
						</h2>
					)
				}
			</header>
		);
	}
}


const styles = StyleSheet.create({
	Header: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		color: '#e1354b',
		borderBottom: '4px solid #e1354b'
	},

	HeaderLogo: {
		width: '20%'
	},

	logOutSpanSection: {
		cursor: 'pointer',
		fontStyle: 'italic'
	},
});
export const mapStateToProps = (state) => {
	return {
		user: state.get("user")
	};
};
const mapDispatchToProps = {
	logout,
};
Header.defaultProps = {
	user: null,
	logout: () => { },
};
Header.propTypes = {
	user: PropTypes.object,
	logout: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);