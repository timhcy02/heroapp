import { createReducer } from 'reduxsauce'
import { REHYDRATE } from 'redux-persist/constants'
import Server from 'Server'
import moment from 'moment';
var _ = require('lodash');
const { Types } = require('../action/hero');

export const INITIAL_STATE = {
	savedHeroes:[],
	savedCarousel:[]
}

export const updateSavedHeroes = (state = INITIAL_STATE, action) => {
	//console.log("action.data ",action.data )
	let currentSavedHeroes = state.savedHeroes;
	if(currentSavedHeroes.includes(action.data)){
		let ind = currentSavedHeroes.indexOf(action.data)
		currentSavedHeroes.splice(ind,1);
	}
	else{
		currentSavedHeroes.push(action.data)
	}
	//console.log("currentSavedHeroes",currentSavedHeroes)
	return { ...state, savedHeroes: [...currentSavedHeroes] };
}

export const updateSavedCarousel = (state = INITIAL_STATE, action) => {
	console.log("action.data ",action.data )
	let currentSavedCarousel = [...state.savedCarousel];
	let ind = _.findIndex(currentSavedCarousel, function(o) { return o.id == action.data.id; })
	if(ind>-1){
		currentSavedCarousel.splice(ind,1);
	}
	else{
		if(currentSavedCarousel.length<8){
			currentSavedCarousel.push(action.data)	
		}
		else{
			alert("The maximum length of carousel is 8.\nPlease remove hero before add new hero.")
			return { ...state};
		}
		
	}
	console.log("currentSavedCarousel",currentSavedCarousel)
	return { ...state, savedCarousel: [...currentSavedCarousel]};
}

export const HANDLERS = {
	[Types.UPDATE_SAVED_HEROES]: updateSavedHeroes,
	[Types.UPDATE_SAVED_CAROUSEL]: updateSavedCarousel
}

module.exports = createReducer(INITIAL_STATE, HANDLERS);