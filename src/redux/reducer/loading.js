import { createReducer } from 'reduxsauce'

const { Types } = require('../action/loading');

export const INITIAL_STATE = {
  api: [],
  storage: [],
}

export const api = (state = INITIAL_STATE, action) => {
  console.log("action.name", action.name)
  return { ...state, api: [ ...state.api , action.name ] }
}

export const dismissAllLoading = (state = INITIAL_STATE, action) => {
  return { ...state, api: [], storage: [] }
}

export const storage = (state = INITIAL_STATE, action) => {
  return { ...state, storage: [ ...state.storage , action.name ] }
}

export const apiSuccess = (state = INITIAL_STATE, action) => {
  return { ...state, api: state.api.filter( n => n!==action.name) }
}

export const storageSuccess = (state = INITIAL_STATE, action) => {
  return { ...state, storage: state.storage.filter( n => n!==action.name) }
}

export const apiError = (state = INITIAL_STATE, action) => {
  return { ...state, api: state.api.filter( n => n!==action.name) }
}

export const storageError = (state = INITIAL_STATE, action) => {
  return { ...state, storage: state.storage.filter( n => n!==action.name) }
}

export const HANDLERS = {

	[Types.API]: api,
	[Types.API_SUCCESS]: apiSuccess,
  [Types.API_ERROR]: apiError,
  [Types.DISMISS_ALL_LOADING]: dismissAllLoading,
	[Types.STORAGE]: storage,
	[Types.STORAGE_SUCCESS]: storageSuccess,
  [Types.STORAGE_ERROR]: storageError,

}

module.exports = createReducer(INITIAL_STATE, HANDLERS);