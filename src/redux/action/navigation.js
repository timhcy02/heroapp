import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
	replace: ['name'],
	setMainNavigation: ['navigation'],
    setSubNavigation: ['navigation'],
})

module.exports = {Types, Creators}