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
import i18 from 'i18';
import { getHorizontalResp } from 'Responsive';


export default class Checkbox extends Component {

    constructor(props) {
		super(props);

		this.state = {
            pickerData: []
        }
           
    }


  render() {


    return (

        
<View>
    <Text></Text>
</View>

              
            

    );
  }
}

const styles = StyleSheet.create({

});

module.exports = Checkbox;