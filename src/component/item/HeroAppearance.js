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
export default class HeroAppearance extends Component {

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
          <Text style={{fontWeight:'bold',fontSize:18}}>Appearance</Text>
        </View>
        <Content title={"Gender"} content={data.gender}/>
        <Content title={"Race"} content={data.race}/>
        <Content title={"Height"} content={data.height.join().replace('\,','\/')}/>
        <Content title={"Weight"} content={data.weight.join().replace('\,','\/')}/>
        <Content title={"Eye-color"} content={data["eye-color"]}/>
        <Content title={"Hair-color"} content={data["hair-color"]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

module.exports = HeroAppearance;