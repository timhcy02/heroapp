import { createReducer } from 'reduxsauce'
import { REHYDRATE } from 'redux-persist/constants'
import Server from 'Server'
import moment from 'moment';

const { Types } = require('../action/auth');

export const INITIAL_STATE = {
	user: {},
	lastLoginDateStr: null,
	showAlertForgotPassword: false,
	rememberPassword: false,
}

export const updateRememberPassword = (state = INITIAL_STATE, action) => {
	return { ...state, rememberPassword: action.rememberPassword };
}

export const updateUser = (state = INITIAL_STATE, action) => {
	return { ...state, user: action.user };
}


export const replaceUsers = (state = INITIAL_STATE, action) => {
	let user = action.user;
	let currentUser = state.currentUser;
	
	users.forEach((user)=> {     //update myaccount display
		if(user.user_id == currentUser.user_id) {
			currentUser = user
		}
	})

	return { ...state, users: action.users, currentUser: currentUser  };
}

export const deleteScaleUser = (state = INITIAL_STATE, action) => {

	let users = state.users.filter((item)=> {
		return item.user_id != action.user_id
	})

	console.log("deleteScaleUser", users)

	

	return { ...state, users: users,  };
}


export const loggedInUser = (state = INITIAL_STATE, action) => {
	let nowStr = moment().local().format('YYYY-MM-DD HH:mm');

	return { ...state, user: action.user, lastLoginDateStr: nowStr };
}

export const loggedOutUser = (state = INITIAL_STATE, action) => {
	return { ...state, user: {}, lastLoginDateStr: null,rememberPassword:false };
}

// special listener, Remove it later
// export const autoLogin = (state = INITIAL_STATE, action) => {

// 	let user = action.payload.auth && action.payload.auth.user || null;
// 	Server.setUser(user);

// 	return state;
// }

export const showAlertForgotPassword = (state = INITIAL_STATE, action) => {
	return { ...state, showAlertForgotPassword: action.val };
}

export const HANDLERS = {
	[Types.UPDATE_USER]: updateUser,
	[Types.UPDATE_REMEMBER_PASSWORD]: updateRememberPassword,
//	[Types.REPLACE_USERS]: replaceUsers,
	[Types.LOGGED_IN_USER]: loggedInUser,
	[Types.LOGGED_OUT_USER]: loggedOutUser,
	//[REHYDRATE]: autoLogin, // special listener, Remove it later
	[Types.SHOW_ALERT_FORGOT_PASSWORD]: showAlertForgotPassword,
	[Types.DELETE_SCALE_USER]: deleteScaleUser,
}

module.exports = createReducer(INITIAL_STATE, HANDLERS);