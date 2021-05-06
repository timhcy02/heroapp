import React, { Component } from 'react';
import { createBottomTabNavigator, createDrawerNavigator, createStackNavigator,createAppContainer,DrawerActions  } from "react-navigation";

import { View, Text, Image, Dimensions, Platform, TouchableWithoutFeedback } from 'react-native';

import { RightDrawerContent, LeftDrawerContent } from "Item";
import { getHorizontalResp } from 'Responsive';
import { connect } from 'react-redux';
import { Action } from 'Redux';
import i18 from 'i18';
import { NavigationActions } from 'react-navigation'

import {LoginPage,Loading, Hero, HeroDetails } from 'Page';


import { themeRed, themeBlack, themeWhite } from 'Theme';

class _Empty extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		let { props } = this;
		props.setNavigation(props.navigation);
	}

	render(){
		return (
			<View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
				<Loading />
			</View>
		);
	}
}

export const LoginStack = createStackNavigator({

	LoginPage: {
		screen: LoginPage,
		navigationOptions: ({ navigation }) => ({
			header: null,
		}),
	},
},{
	initialRouteName: 'LoginPage',
	navigationOptions: {
		gesturesEnabled: false
	  }
})

const Empty = connect(
	state => ({
		user: state.auth.user
	}),
	dispatch => ({
		setNavigation: (navigation)=>dispatch(Action.navigation.setMainNavigation(navigation))
	})
)(_Empty);

const MainStack = createStackNavigator({

	Hero: {
		screen: ({ navigation,screenProps }) => { return <Hero navigation={navigation} /> },
		navigationOptions: ({ navigation }) => ({
			header: null,
		}),
	},
	HeroDetails: {
		screen: ({ navigation,screenProps }) => { return <HeroDetails navigation={navigation} /> },
		navigationOptions: ({ navigation }) => ({
			header: null,
		}),
	},
},{
	initialRouteName: 'Hero',
	defaultNavigationOptions: {
		gesturesEnabled: false
	  }
})

export const Stack = createStackNavigator({
	Empty: { //must keep
		screen: ({ navigation }) => <Empty navigation={navigation} />,
		navigationOptions: ({ navigation }) => ({
			header: null,
		}),
	},

	LoginStack: {
		screen: LoginStack,
		navigationOptions: ({ navigation }) => ({
			header: null,
		}),
	},

	MainStack: {
		screen: MainStack,
		navigationOptions: ({ navigation }) => ({
			header: null,
		}),
	},
},{
	initialRouteName: 'MainStack',
	defaultNavigationOptions: {
		gesturesEnabled: false
	  }
})



const AppContainer = createAppContainer(Stack);

class AppNavigator extends Component { 

	onNavigationStateChange = (preState,nextState,action)=>{
		let {props} = this;
	}

	render(){
		let {user, loading} = this.props;
		return (
			<AppContainer onNavigationStateChange={this.onNavigationStateChange}/>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
  return {
	  user: state.auth.user,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(AppNavigator);