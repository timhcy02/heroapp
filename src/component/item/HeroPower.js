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
export default class HeroPower extends Component {

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
          <Text style={{fontWeight:'bold',fontSize:18}}>Powerstats</Text>  
        </View>     
        <Content title={"Intelligence"} content={data.intelligence}/>
        <Content title={"Strength"} content={data.strength}/>
        <Content title={"Speed"} content={data.speed}/>
        <Content title={"Durability"} content={data.durability}/>
        <Content title={"Power"} content={data.power}/>
        <Content title={"Combat"} content={data.combat}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

module.exports = HeroPower;