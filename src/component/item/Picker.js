import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Alert,
	AppState,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Platform,
} from 'react-native';
import { connect } from 'react-redux';
import { getHorizontalResp } from 'Responsive';
import i18 from 'i18';
// import RNPickerSelect from 'react-native-picker-select';

export default class Picker extends Component {

    constructor(props) {
		super(props);

		this.state = {
            pickerData: [],
            Value:''
        }
           
    }


    // UNSAFE_componentWillMount() {
       
    //    let {type} = this.props;
    //    let pickerData = [];
    //    type.forEach(element => {
    //     let item = {label:element.type,value:element.type}
    //     pickerData.push(item)
    //    });
    //    this.setState({pickerData:pickerData})
       
    // }
    
    componentWillUnmount() {
        
    }



  render() {
	
    let {colorSet} = this.props;
    return (
        <View></View>
        // <RNPickerSelect
        //     onValueChange={(value) => {
        //         this.props.setIncidentType(value)
        //         this.setState({incidentValue:value}) 
        //     }}
        //     items={this.state.pickerData}
        //     placeholder = {{
        //         label: '請選擇 Please Select ...',
        //         value: null,
        //     }}
        //     style={{
        //         inputIOS: {
        //             width:'100%',
        //             fontSize: 20,
        //             paddingVertical: 10,
        //             paddingHorizontal: 10,
        //             borderWidth: 1,
        //             borderColor: colorSet.moderate_orange,
        //             color: colorSet.black,
        //             paddingRight: 30, // to ensure the text is never behind the icon
        //             backgroundColor:colorSet.white,
        //             textAlign:'center',
        //           },
        //           inputAndroid: {
        //             width:'100%',
        //             fontSize: 20,
        //             paddingVertical: 10,
        //             paddingHorizontal: 10,
        //             borderWidth: 1,
        //             borderColor: colorSet.moderate_orange,
        //             color: colorSet.black,
        //             paddingRight: 30, // to ensure the text is never behind the icon
        //             backgroundColor:colorSet.white,
        //             textAlign:'center'
        //           },
        //         iconContainer: {
        //             top: 20,
        //             right: 15,
        //         },

        //     }}
        //     value={this.state.incidentValue}
        //     useNativeAndroidPickerStyle={false}
        //     Icon={() => {
        //         return (
                        
        //                 <View
        //                     style={{
        //                         backgroundColor: 'transparent',
        //                         borderTopWidth: 10,
        //                         borderTopColor: colorSet.grey,
        //                         borderRightWidth: 10,
        //                         borderRightColor: 'transparent',
        //                         borderLeftWidth: 10,
        //                         borderLeftColor: 'transparent',
        //                         height:'100%'
        //                     }}
        //                 />
                    
        //         );
        //     }}
        // />
    );
  }
}

// const pickerSelectStyles = StyleSheet.create({
//     inputIOS: {
//         width:'100%',
//         fontSize: 20,
//         paddingVertical: 10,
//         paddingHorizontal: 10,
//         borderWidth: 1,
//         borderColor: '#B38834',
//         color: 'black',
//         paddingRight: 30, // to ensure the text is never behind the icon
//         backgroundColor:'white',
//         textAlign:'center',
//       },
//       inputAndroid: {
//         width:'100%',
//         fontSize: 20,
//         paddingVertical: 10,
//         paddingHorizontal: 10,
//         borderWidth: 1,
//         borderColor: '#B38834',
//         color: 'black',
//         paddingRight: 30, // to ensure the text is never behind the icon
//         backgroundColor:'white',
//         textAlign:'center'
//       },
// });

const mapStateToProps = (state, ownProps) => {
	return {
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
	return { ...othersProps, ...loginProps};
})(Picker);