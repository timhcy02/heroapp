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
import Content from './Content'
export default class HeroCarousel extends Component {

    constructor(props) {
		super(props);

		this.state = {
        }
           
    }

  render() {
    let {props} = this;
    let {data} = props;
    return (
      <View style={{paddingVertical:5}}>
        <View style={{backgroundColor:'#ced4da',paddingVertical:5}}>
          <Text style={{fontWeight:'bold',fontSize:18}}>Work</Text>
        </View>
        <Content title={"Occupation"} content={data.occupation}/>
        <Content title={"Base"} content={data.base}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

module.exports = HeroCarousel;