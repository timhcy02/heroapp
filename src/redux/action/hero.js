import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
	updateSavedHeroes: ['data'],
	updateSavedCarousel: ['data'],

},{
	prefix: 'HERO_'
})

module.exports = { Types, Creators }