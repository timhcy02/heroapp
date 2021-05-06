import { createReducer } from 'reduxsauce'
import { REHYDRATE } from 'redux-persist/constants'
import Server from 'Server'
import moment from 'moment';

const { Types } = require('../action/main');

export const INITIAL_STATE = {
	htmlViewdata: '',
	webViewdata: '',
	messages: [],
	messageAlert: '',
	recordBuyNewCard: 0
}

export const updateHtmlView = (state = INITIAL_STATE, action) => {
	return { ...state, htmlViewdata: action.data };
}

export const updateWebView = (state = INITIAL_STATE, action) => {
	return { ...state, webViewdata: action.data };
}

export const fetchMessage = (state = INITIAL_STATE, action) => {
	return { ...state, messages: action.data };
}

export const updateMessageAlert = (state = INITIAL_STATE, action) => {
	
	return { ...state, messageAlert: action.message};
}

export const recordBuyNewCard = (state = INITIAL_STATE, action) => {
	
	return { ...state, recordBuyNewCard: action.data ? state.recordBuyNewCard + 1 : 0};
}




export const HANDLERS = {
	[Types.UPDATE_HTML_VIEW]: updateHtmlView,
	[Types.UPDATE_WEB_VIEW]: updateWebView,
	[Types.FETCH_MESSAGE]: fetchMessage,
	[Types.UPDATE_MESSAGE_ALERT]: updateMessageAlert,
	[Types.RECORD_BUY_NEW_CARD]: recordBuyNewCard,
}

module.exports = createReducer(INITIAL_STATE, HANDLERS);