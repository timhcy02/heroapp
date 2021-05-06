/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, Dimensions,  Switch, TouchableOpacity,TouchableWithoutFeedback} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { getHorizontalResp } from 'Responsive';
import i18 from 'i18';
import { connect } from 'react-redux';

export default class HeroDetails extends Component {

  constructor(props) {
		super(props);

		this.state = {

		};
	}


  render() {
    let { props } = this;

    return (

    <View style={styles.container}>
      <Text>Testing</Text>
    </View>        
    );
  }
}

const styles = StyleSheet.create({
  container:{flex:1},
});



const mapStateToProps = (state, ownProps) => {
	return {
        user: state.auth.user,
        language: state.setting.language,
        measurementSound: state.setting.measurementSound,
        currentUser: state.auth.currentUser,
        darkMode:state.setting.darkMode,
        colorSet:state.setting.colorSet,
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
	return {...othersProps, ...loginProps};
})(HeroDetails);