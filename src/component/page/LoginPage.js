/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Alert, Dimensions, TouchableOpacity, TextInput,ImageBackground} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

import { Background, SOS } from 'Item'

import { getHorizontalResp } from 'Responsive';

import i18 from 'i18';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';


export default class LoginPage extends Component {

    constructor(props) {
		super(props);

		this.state = {
            account: '',
            password: '',
            rememberPassword:true,
            networkInfo:'',
        }
           
	}

    handleFirstConnectivityChange(connectionInfo) {
		let info = connectionInfo.type.toLowerCase();
		console.log("handleFirstConnectivityChange", info)
		this.setState({networkInfo:info})
	}

    componentDidMount(){
		let { props } = this;
		let {navigation,user,rememberPassword} = props
        NetInfo.getConnectionInfo().then(
            (connectionInfo) => { 
                let info = connectionInfo.type.toLowerCase();
                console.log("NetInfo.fetch", info)
                this.setState({networkInfo:info})
                    if(info != 'none'){

                    }
                    else{
                        Alert.alert(
                            '',
                            i18.NOINTERNETCONNECTION,
                            [
                                { text:  i18.OK, onPress: () => console.log('OK Pressed') },
                            ]
                        )
                    }
            }

        );

        NetInfo.addEventListener(
            'connectionChange',
            this.handleFirstConnectivityChange.bind(this)
        );

    }

	componentWillUnmount() {

		NetInfo.removeEventListener(
			'connectionChange',
			this.handleFirstConnectivityChange.bind(this)
		);
	}
    

	componentWillReceiveProps (newProps) {
		let { props } = this;
		let { user, navigation } = props;

		// if(newProps.user && newProps.rememberPassword){
		// 	navigation.navigate(NavigationActions.navigate({
		// 		routeName: 'MainStack',
		// 		action: NavigationActions.navigate({ routeName: 'RouteList' })
		// 	}))
		// }
	}

  render() {
    let { props } = this;
    let { navigation,colorSet } = props;

    return (

            <View style={{flex:1,alignItems:'center'}}>

                

                
            </View>


        
    );
  }
}

const styles = StyleSheet.create({
  
});


const mapStateToProps = (state, ownProps) => {
	return {
        colorSet:state.setting.colorSet,
        user:state.auth.user,
        rememberPassword:state.auth.rememberPassword,
	}
}

import { 
    Login as loginMapDispatchToProps,
	Others as othersMapDispatchToProps
} from 'Controller';

let othersProps;
let loginProps;

module.exports = connect(mapStateToProps, (dispatch, ownProps)=>{
    loginProps = loginMapDispatchToProps(dispatch, ownProps)
	othersProps = othersMapDispatchToProps(dispatch, ownProps)
	return { ...othersProps, ...loginProps};
})(LoginPage);