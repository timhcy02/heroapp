/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, Dimensions, Switch, TouchableOpacity, WebView, Alert } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

import { Background } from 'Item'

import { getHorizontalResp } from 'Responsive';

// import PinView from 'react-native-pin-view'

import i18 from 'i18';
import { connect } from 'react-redux';




export default class LockScreen extends Component {

  constructor(props) {
		super(props);

		this.state = {
           firstVal: '',
           secondVal: '',
           firstPin: false,
           secondPin: false,
		};
    }
    

  


  render() {
    let { props } = this;
    let { navigation } = props;

    return (
       
        <View>
        <View style={{height: 60, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
            <View style={{width: '15%', alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={()=> {
                    navigation.goBack();
                }}>
                    <View style={{height:60, width: 60, alignItems: 'center', justifyContent: 'center'}}>
                 
                    </View>  
                </TouchableOpacity>
            </View>
            <View style={{width: '70%', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: getHorizontalResp(16), color: '#FFFFFF', fontWeight: 'bold'}}>{i18.PIN}</Text>
            </View> 

            <View style={{width: '15%', alignItems: 'center', justifyContent: 'center'}}>

            </View>
        </View>

        

        <View style={{marginTop: 10, height: 70, justifyContent: 'center', alignItems: 'center', width: '100%'}}>
            <Text style={{marginBottom: 20, color: '#FFFFFF', fontWeight: 'bold', fontSize: getHorizontalResp(14)}}>
                {
                    !this.state.firstPin ? i18.InputPIN : null
                }
                {
                    this.state.firstPin && !this.state.secondPin ? i18.InputPINAgain : null
                }
            </Text>
        </View>  

        {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
               
            {
                !this.state.firstPin ? (
                    <PinView
                        onComplete={(val, clear)=>{{
                            this.setState({
                                firstVal: val,
                                firstPin: true
                            })   
                        }}}
                        pinLength={4}
                        deleteText={'x'}
                    />
                ) : null
            }

            {
                this.state.firstPin && !this.state.secondPin ? (
                    <PinView
                        onComplete={(val, clear)=>{{
                            if(this.state.firstPin && !this.state.secondPin ) {
                                this.setState({
                                    secondVal: val,
                                })
                            }

                            if(this.state.firstVal != val) {
                                Alert.alert(
                                    '',
                                    i18['Wrong passcode, input all again'],
                                    [
                                        { text:  i18.OK, onPress: () => {
                                            this.setState({
                                                firstVal: '',
                                                secondVal: '',
                                                firstPin: false,
                                                secondPin: false,
                                            })
                                        }},
                                    ]
                                )

                            }

                            if(this.state.firstVal == val) {
                                // put it in redux

                                props.lockPasscodeStatus(val, true);
                                                             
                                navigation.goBack();
                            }
                            
                        }}}
                        pinLength={4}
                        deleteText={'x'}
                    />
                ) : null
            }
            

        </View> */}
          </View>
       
    );
  }
}

const styles = StyleSheet.create({
  
});


const mapStateToProps = (state, ownProps) => {
	return {
        passcode: state.setting.passcode,
        enableLock: state.setting.enableLock,
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
})(LockScreen);