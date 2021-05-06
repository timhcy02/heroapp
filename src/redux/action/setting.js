import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
	updateScreenView: ['screenView'],
	changeLanguage: ['language'],
	changeQRReader: ['val'],
	networkInfoUpdate: ['info'],
	addToCart: ['data'],
	updateCart: ['data'],
	markAsRead: ['data'],
	networkStatusUpdate: ['isConnected'],
	updateEmail: ['data'],
	recordNonNumberCartID: ['data'],
	storeLoginInfo: ['data'],
	updateCardNoForRegister: ['data'],
	changeDarkMode:null,
},{
	prefix: 'SETTING_'
})
module.exports = { Types, Creators }