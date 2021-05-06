import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
	api: ['name'],
	apiSuccess: ['name'],
	apiError: ['name'],
	dismissAllLoading: [],
	storage: ['name'],
	storageSuccess: ['name'],
	storageError: ['name'],

},{
	prefix: 'LOADING_'
})

module.exports = { Types, Creators }