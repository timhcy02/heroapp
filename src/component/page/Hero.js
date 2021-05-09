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
import {SearchBar, HeroCarousel} from '../item'
import { Icon } from 'react-native-elements'
var _ = require('lodash');

export default class Hero extends Component {

  constructor(props) {
		super(props);

		this.state = {
      heroList:[],
      displayHeroList:[],
      message:'',
      sorting:'asc',
      currentDisplaySize:10
		};
	}

  componentDidMount(){

  }

  componentDidUpdate(prevProps){
   console.log(this.props.savedCarousel,prevProps.savedCarousel)

  }

  getData(){
    if(this.state.displayHeroList.length<this.state.currentDisplaySize){
      return
    }
    else{
      if(this.state.heroList.length>this.state.currentDisplaySize){
        this.setState({
          displayHeroList:_.take(this.state.heroList,this.state.currentDisplaySize+10),
          currentDisplaySize:this.state.currentDisplaySize+10
        })
      }
    }
  }

  render() {
    let { props } = this;
    let { savedHeroes, savedCarousel } = props;
    return (

    <View style={styles.container}>
      <HeroCarousel data={savedCarousel}/>
      <SearchBar sorting={this.state.sorting} onPress={(text)=>{
        props.getHero(text)
        .then((result)=>{
          console.log(result)
          if(result){
            let displayHeroList = _.take(result,this.state.currentDisplaySize)
            this.setState({heroList:result,displayHeroList:displayHeroList,sorting:'asc'})
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
            this.state.displayHeroList.length>0?
              <FlatList
              data={this.state.displayHeroList}
              renderItem={({ item }) => (
                <View style={styles.heroItem}>
                  <View style={{flex:3}}>
                    <TouchableOpacity onPress={()=>{props.navigation.navigate('HeroDetails',{info:item})}}>
                      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <View style={{paddingRight:10}}>
                          <Image source={{uri:item.image.url}} style={styles.avatar}/>
                        </View>
                        <View style={{flex:1}}>
                          <Text style={styles.displayText}>ID: {item.id}</Text>
                          <Text style={styles.displayText}>Name: {item.name}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{flexDirection:'row',flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Icon
                      containerStyle={{paddingHorizontal:10}}
                      name={'heart'}
                      type='font-awesome-5'
                      color={savedHeroes.includes(item.id)?'#fb3640':'#000'}
                      solid={savedHeroes.includes(item.id)?true:false}
                      onPress={()=>{props.updateSavedHeroes(item.id)}}
                    />
                    <Icon
                      containerStyle={{paddingHorizontal:10}}
                      name={_.findIndex(savedCarousel, function(o) { return o.id == item.id; })>-1?'minus':'plus'}
                      type='font-awesome-5'
                      color='#000'
                      onPress={()=>{
                        let data = {
                          id: item.id,
                          name: item.name,
                          image: item.image.url
                        }
                        props.updateSavedCarousel(data)
                      }}
                    />
                  </View>
                </View>  
              )}
              keyExtractor={item => item.id}
              extraData={this.state}
              onEndReached={()=>{this.getData()}}
              onEndReachedThreshold={0.5}
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
      savedCarousel: state.hero.savedCarousel, 
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