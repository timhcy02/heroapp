import React, { Component } from 'react';
import { View, StyleSheet, Platform, Text, BackHandler, Alert, AppState, SafeAreaView,StatusBar,AsyncStorage,PushNotificationIOS } from 'react-native';
import { connect } from 'react-redux';

import { Loading } from 'Page';
import { DEBUG } from 'Config';
import i18 from 'i18';
import AppNavigator from "../config/navigation";

const Actions = require('Redux').Action;
import globalVal from '../../src/globalVal.js';
import { Background } from 'Item'
import SplashScreen from 'react-native-splash-screen'
import { getHorizontalResp } from 'Responsive';
import { StackActions, NavigationActions } from 'react-navigation';

class App extends Component {

	constructor(props) {
		super(props);
		if (Text.defaultProps == null) Text.defaultProps = {};
		Text.defaultProps.allowFontScaling = false;
		this.state = {
			loading: true,
			appState: AppState.currentState,
			locked: false,
			
		};
	}

	componentDidMount() {
		let { props } = this;
		let {navigation} = props
		setTimeout(()=> {
			let { enableLock, } = this.props;

			console.log(enableLock)
			
			this.setState({locked: enableLock});
			//for measurement sound

		}, 500)
	

		if (Platform.OS == 'android') {
			BackHandler.addEventListener('hardwareBackPress', function() {
				console.log("hardware Back Press");
				return true;
			});
				// SplashScreen.hide();
				setTimeout(() => SplashScreen.hide(), 2000);
	
		}

		AppState.addEventListener('change', this._handleAppStateChange);
	}

	componentWillReceiveProps (newProps) {

	}

	componentWillMount(){
		
	}

	componentWillUnmount() {
		AppState.removeEventListener('change', this._handleAppStateChange);
	}

	_handleAppStateChange = (nextAppState) => {
		let { props } = this;
		let { user } = props;
		this.setState({appState: nextAppState});
	}

	render() {
		let { props } = this;
		let { loading, passcode,colorSet } = this.props;
		return (
			<SafeAreaView style={{ flex: 1,}}>
				<AppNavigator />
				{
					loading ? (
					<Loading/>
					) : null
				}
			</SafeAreaView>
		)
	}



}

const mapStateToProps = (state, ownProps) => {

		

	return {
		loading: (state.loading.api.length > 0 || state.loading.storage.length > 0)
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		resetProgress: ()=>{
			dispatch(Actions.progressBar.reset());
		},
		cancelProgress: ()=>{
			dispatch(Actions.progressBar.cancel());			
		},
	}
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(App);