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
import { Icon } from 'react-native-elements'

export default class Hero extends Component {

  constructor(props) {
		super(props);

		this.state = {
      heroList:[],
      message:'',
      sorting:'asc'
		};
	}

  componentDidMount(){

  }

  render() {
    let { props } = this;

    return (

    <View style={styles.container}>
      <SearchBar sorting={this.state.sorting} onPress={(text)=>{
        props.getHero(text)
        .then((result)=>{
          console.log(result)
          if(result){
            this.setState({heroList:result,sorting:'asc'})
          }
          else{
            this.setState({heroList:[],sorting:'asc',message:'Cannot search hero, please try again'})
          }
        })
        }}
        onReorderPress={()=>{
          let newHeroList = this.state.heroList;
          if(newHeroList.length>0){
            this.state.sorting == 'asc'?
              newHeroList = newHeroList.sort((a,b)=> {
                return b.id - a.id}
              )
            :
              newHeroList = newHeroList.sort((a,b)=> {
                return a.id - b.id}
              )
            this.setState({heroList:newHeroList,sorting:this.state.sorting == 'asc'?'desc':'asc'})
          }
          else{
            alert("No data can be sorted.");
          }
        }}/>
          {
            this.state.heroList.length>0?
              <FlatList
              data={this.state.heroList}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={()=>{props.navigation.navigate('HeroDetails',{info:item})}}>
                  <View style={styles.heroItem}>
                    <View style={{flex:2,paddingRight:10}}>
                      <Image source={{uri:item.image.url}} style={styles.avatar}/>
                    </View>
                    <View style={{flex:4}}>
                      <Text style={styles.displayText}>ID: {item.id}</Text>
                      <Text style={styles.displayText}>Name: {item.name}</Text>
                    </View>
                    <View>

                    </View>
                  </View>
                </TouchableOpacity>
                  
              )}
              keyExtractor={item => item.id}
              extraData={this.state}
              />
            :
            <View style={styles.searchReminder}>
              <Text style={styles.searchReminderText}>{this.state.message}</Text>
            </View>
              
          }  
        </View>
            
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  heroItem:{
    borderBottomWidth:1,
    padding:10,
    flexDirection:'row'
  },
  searchReminder:{
    alignItems:'center',
    justifyContent:'center',
  },
  searchReminderText:{
    fontSize:16,
    fontWeight:'bold',
    padding:10,
    color:'#333'
  },
  avatar:{
    width:100,
    height:100,
    resizeMode:'cover'
  },
  displayText:{
    fontSize:16,
    fontWeight:'bold',
  }

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
})(Hero);