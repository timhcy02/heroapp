import Server from 'Server';

const Actions = require('Redux').Action;
import i18 from 'i18';


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
		updateScreenView: (screenView)=>{
			dispatch(Actions.setting.updateScreenView(screenView));
		},
		changeLanguage: (lang)=>{
			dispatch(Actions.setting.changeLanguage(lang));
		},
		updateMessageAlert: (message) => {
			dispatch(Actions.main.updateMessageAlert(message));
		},
		cameraStatus: (data)=>{
			dispatch(Actions.setting.cameraStatus(data));
		},
		logout: ()=>{
			return dispatch(Actions.auth.loggedOutUser());
			// return Server.logout().then(()=>{
			// 	dispatch(Actions.navigation.replace('Login'));
			// }).then(() => {
			// 	dispatch(Actions.auth.loggedOutUser());
			// 	dispatch({
			// 		type: "DF_APP_RESET"
			// 	});
			// });
		},
		networkInfoUpdate: (info) => {
			dispatch(Actions.setting.networkInfoUpdate(info));
		},
  }
}

module.exports = mapDispatchToProps;