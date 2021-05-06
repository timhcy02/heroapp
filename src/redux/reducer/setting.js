import { createReducer } from 'reduxsauce'

const { Types } = require('../action/setting');

export const INITIAL_STATE = {
	passcode: '',
	enableLock: false,
	language: 'en',
	QRReader: false,
	languageSet: false,
	cameraOpenned: false,
	connectionInfo: null,
	isConnected: true,
	cart: [],
	messageRead: [],
	email: '',
	screenView: '',
	nonNumberCartID: [],
	storeLogin: {
		login_name: '',
        cardNo: ''
	},
	cardNoForReg: '', 
	darkMode:false,

}

export const updateScreenView = (state = INITIAL_STATE, action) => {
	
	return { ...state, screenView: action.screenView };
}

export const changeLanguage = (state = INITIAL_STATE, action) => {
	
	return { ...state, language: action.language, languageSet: true };
}

export const changeQRReader = (state = INITIAL_STATE, action) => {
	
	return { ...state, QRReader: action.val};
}

export const networkInfoUpdate = (state = INITIAL_STATE, action) => {
	return { ...state, connectionInfo: action.info };
}

export const networkStatusUpdate = (state = INITIAL_STATE, action) => {
	return { ...state, isConnected: action.isConnected };
}



export const HANDLERS = {
	[Types.CHANGE_LANGUAGE]: changeLanguage,
	[Types.CHANGE_Q_R_READER]: changeQRReader,
	[Types.NETWORK_INFO_UPDATE]: networkInfoUpdate,
	[Types.NETWORK_STATUS_UPDATE]: networkStatusUpdate,
	[Types.UPDATE_SCREEN_VIEW]: updateScreenView,
}

module.exports = createReducer(INITIAL_STATE, HANDLERS);