import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
	updateUser: ['user'],
	loggedInUser: ['user'],
	loggedOutUser: null,
	showAlertForgotPassword: ['val'],
	replaceUsers: ['user'],
	updateRememberPassword: ['rememberPassword'],
	deleteScaleUser: ['user_id']
},{
	prefix: 'AUTH_'
})

module.exports = { Types, Creators }