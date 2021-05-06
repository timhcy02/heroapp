import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
	updateHtmlView: ['data'],
	updateWebView: ['data'],
	fetchMessage: ['data'],
	updateMessageAlert: ['message'],
	recordBuyNewCard: ['data'],
},{
	prefix: 'MAIN_'
})

module.exports = { Types, Creators }