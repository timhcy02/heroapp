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

export default class SearchBar extends Component {

    constructor(props) {
		super(props);

		this.state = {
            searchText: ""
        }
           
    }


  render() {
    const {props} = this;

    return (

        
    <View style={styles.searchBar}>
        <View style={styles.searchBoxView}>
          <TextInput style={styles.searchBox}
          onChangeText={text => this.setState({searchText:text})}
          value={this.state.searchText}
          placeholder={"Search Here"}
          />
        </View>
        <View style={styles.searchButtonView}>
          <TouchableOpacity onPress={()=>{props.onPress(this.state.searchText)}}>
            <View style={styles.searchButton}>
              <Text style={styles.searchButtonText}>Search</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.orderButtonView}>
          <TouchableOpacity onPress={()=>{props.onReorderPress()}}>
            <Icon
              name={props.sorting == 'asc' ?'sort-up':'sort-down'}
              type='font-awesome-5'
              color='#000'
            />
          </TouchableOpacity>
        </View>
    </View>

              
            

    );
  }
}

const styles = StyleSheet.create({
  searchBar:{
    height:50,
    width:'100%',
    backgroundColor:'#e9ecef',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10
  },
  searchBoxView:{
    flex:5,
    alignItems:'center',
    justifyContent:'center',

  },
  searchButtonView:{
    flex:2,
    alignItems:'center',
    justifyContent:'center',

  },
  orderButtonView:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',

  },
  searchBox:{
    height:30,
    width:'100%',
    backgroundColor:'#fff',
    borderRadius:5,
    paddingLeft:10
  },
  searchButton:{
    backgroundColor:'#2a9df4',
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:5
  },
  searchButtonText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:14
  },

});

module.exports = SearchBar;