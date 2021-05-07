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

export default class Content extends Component {

    constructor(props) {
		super(props);

		this.state = {
        }
           
    }

  render() {
    let {props} = this;
    return (
      <View style={{flexDirection:'row',paddingVertical:3}}>
        <Text style={styles.title}>{props.title+": "}</Text>
        <Text style={styles.content}>{props.content}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title:{
    fontSize:16,
    fontWeight:'bold'
  },
  content:{
    fontSize:16,
    flexShrink:1
  }
});

module.exports = Content;