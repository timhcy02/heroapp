import { createReducer } from 'reduxsauce'
import { StackActions,NavigationActions } from 'react-navigation';
import { REHYDRATE } from 'redux-persist/constants'
import AsyncStorage from '@react-native-community/async-storage';

import Server from 'Server';

const {Types} = require('../action/navigation'); 


export const INITIAL_STATE = { 
	main: null,
	sub: null,
	showFirstTimeLanguage: true, 
}

export const replace = (state = INITIAL_STATE, action)=>{
	if (state.main) {
		console.log('Navigation test')
		state.main.dispatch(StackActions.reset({
			index: 0,
			actions: [NavigationActions.navigate({ routeName: action.name ==  'RouteList'? 'MainStack':'LoginStack'})]
		}));
	}

	return state;
}

export const replaceRehydrate = (state = INITIAL_STATE, action) => {
	let user = action.payload && action.payload.auth && action.payload.auth.user;
	let rememberPassword = action.payload && action.payload.auth && action.payload.auth.rememberPassword;

	var _state = (action.sharedState && typeof action.sharedState === 'function') ? action.sharedState() : null;
	//console.log(_state)
	if (user && user._id && rememberPassword){
		console.log('test')
		// only go to main page when the user is logged in and he/she has selected a project
		return AsyncStorage.getItem("accessToken").then((value) => {
			// currentUser.api_token = value
			 //Server.autoLogin(user);
			return replace(state, {name:'RouteList'});
		})
		//return replace(state, {name:'RouteList'});
		
	}	
	else return replace(state, {name:'Login'});
}

export const setMainNavigation = (state = INITIAL_STATE, action) => {
	if (state.main)
		return state;
	else
  	return { ...state, main: action.navigation }
}

export const setSubNavigation = (state = INITIAL_STATE, action) => {
  if (state.sub)
		return state;
	else
  	return { ...state, sub: action.navigation }
}


export const HANDLERS = {
  	[REHYDRATE]: replaceRehydrate,
  [Types.REPLACE]: replace,	
  [Types.SET_MAIN_NAVIGATION]: setMainNavigation,
  [Types.SET_SUB_NAVIGATION]: setSubNavigation,
}

module.exports = createReducer(INITIAL_STATE, HANDLERS);