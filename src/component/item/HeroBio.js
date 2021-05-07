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
export default class HeroBio extends Component {

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
          <Text style={{fontWeight:'bold',fontSize:18}}>Biography</Text> 
        </View>
        <Content title={"Full-name"} content={data["full-name"]}/>
        <Content title={"Alter-egos"} content={data["alter-egos"]}/>
        <Content title={"Aliases"} content={data.aliases.join()}/>
        <Content title={"Place-of-birth"} content={data["place-of-birth"]}/>
        <Content title={"First-appearance"} content={data["first-appearance"]}/>
        <Content title={"Publisher"} content={data.publisher}/>
        <Content title={"Alignment"} content={data.alignment}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

module.exports = HeroBio;