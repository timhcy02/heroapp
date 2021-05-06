/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, Dimensions,  Switch, TouchableOpacity,TouchableWithoutFeedback, FlatList} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { getHorizontalResp } from 'Responsive';
import i18 from 'i18';
import { connect } from 'react-redux';
import {SearchBar} from '../item'
export default class Hero extends Component {

  constructor(props) {
		super(props);

		this.state = {
      heroList:[],
		};
	}

  componentDidMount(){

  }

  render() {
    let { props } = this;

    return (

    <View style={styles.container}>
      <SearchBar onPress={(text)=>{
        props.getHero(text)
        .then((result)=>{
          console.log(result)
          if(result){
            this.setState({heroList:result})
          }
        })
        }}/>
        <FlatList
          data={this.state.heroList}
          renderItem={({ item }) => (
              <Text>{item.id}</Text>
          )}
          keyExtractor={item => item.id}
          extraData={this.state}
        />
    </View>        
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },

});



const mapStateToProps = (state, ownProps) => {
	return {
        savedHeroes: state.hero.savedHeroes,
        savedCarousel: state.setting.savedCarousel,
	}
}

import { 
  Login as loginMapDispatchToProps,
	Hero as heroMapDispatchToProps
} from 'Controller';

let heroProps;
let loginProps;

module.exports = connect(mapStateToProps, (dispatch, ownProps)=>{
  loginProps = loginMapDispatchToProps(dispatch, ownProps)
	heroProps = heroMapDispatchToProps(dispatch, ownProps)
	return {...heroProps, ...loginProps};
})(Hero);