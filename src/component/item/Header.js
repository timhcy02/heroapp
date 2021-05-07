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
import { Icon } from 'react-native-elements'

export default class Header extends Component {

    constructor(props) {
		super(props);

		this.state = {
        }
           
    }

  render() {
    let {props} = this;
    return (
      <View style={styles.header}>
        <View style={{width:50,justifyContent:'center',alignItems:'center'}}>
          <Icon
            name="chevron-left"
            type='font-awesome-5'
            color='#000'
            onPress={()=>{props.onGoBack()}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    height:50,
    paddingVertical:10,
    backgroundColor:'#e9ecef',
    justifyContent:'center',
  }
});

module.exports = Header;