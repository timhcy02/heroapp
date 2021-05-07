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
import {Header,HeroAppearance,HeroBio,HeroConnection,HeroPower,HeroWork,Content} from '../item';

export default class HeroDetails extends Component {

  constructor(props) {
		super(props);

		this.state = {
      heroInfo:{}
		};
	}

  componentDidMount(){
    let {props} = this;
    this.setState({heroInfo:props.navigation.state.params.info})
  }

  render() {
    let { props } = this;
    let heroInfo = props.navigation.state.params.info;
    return (

    <ScrollView style={styles.container}>
      <Header onGoBack={()=>{props.navigation.goBack()}}/>
      <View style={[styles.container,{padding:10}]}>
        <View style={{flexDirection:'row'}}>
          <Image source={{uri:heroInfo.image.url}} style={styles.avatar}/>
          <View style={{paddingHorizontal:5}}>
            <Content title={"Name"} content={heroInfo.name}/>    
          </View>
          
        </View>

        <HeroPower data={heroInfo.powerstats}/>
        <HeroBio data={heroInfo.biography}/>
        <HeroAppearance data={heroInfo.appearance}/>
        <HeroWork data={heroInfo.work}/>
        <HeroConnection data={heroInfo.connections}/>
      </View>
    </ScrollView>        
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  avatar:{
    width:100,
    height:100,
    resizeMode:'cover'
  },
});



const mapStateToProps = (state, ownProps) => {
	return {
      savedHeroes: state.hero.savedHeroes,
      savedCarousel: state.setting.savedCarousel,
	}
}

import { 
	Hero as heroMapDispatchToProps
} from 'Controller';

let heroProps;

module.exports = connect(mapStateToProps, (dispatch, ownProps)=>{
	heroProps = heroMapDispatchToProps(dispatch, ownProps)
	return {...heroProps};
})(HeroDetails);