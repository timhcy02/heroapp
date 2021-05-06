import { createReducer } from 'reduxsauce'
import { REHYDRATE } from 'redux-persist/constants'
import Server from 'Server'
import moment from 'moment';

const { Types } = require('../action/hero');

export const INITIAL_STATE = {
	savedHeroes:[],
	savedCarousel:[]
}

export const updateSavedHeroes = (state = INITIAL_STATE, action) => {
	return { ...state, savedHeroes: action.data };
}

export const updateSavedCarousel = (state = INITIAL_STATE, action) => {
	return { ...state, savedCarousel: action.data };
}

export const HANDLERS = {
	[Types.UPDATE_SAVED_HEROES]: updateSavedHeroes,
	[Types.UPDATE_SAVED_CAROUSEL]: updateSavedCarousel
}

module.exports = createReducer(INITIAL_STATE, HANDLERS);