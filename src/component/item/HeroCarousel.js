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
import Content from './Content'
import Carousel from 'react-native-snap-carousel';
import { Icon } from 'react-native-elements'
import Swiper from 'react-native-swiper'

export default class HeroCarousel extends Component {

  constructor(props) {
  super(props);

  this.state = {
   data:[]
  }
          
  }

  componentDidMount(){
    this.setState({data:this.props.data})
  }

  componentDidUpdate(prevProps){
    if(this.props.data !== prevProps.data){
      this.setState({data:this.props.data})
    }
  }

  render() {
    let {props} = this;
    let {data} = this.state;
    return (
      <View>
        {
          data.length>0?
          <View style={styles.intro}>
            <Swiper showsButtons={false} autoplay={true} showsPagination={false}>
              {
                data.map((hero)=>{
                  return(
                    <View style={styles.slide}>
                      <Image source={{uri:hero.image}} style={styles.avatar}/>
                      <View style={{justifyContent:'center',alignItems:'center',paddingHorizontal:10}}>
                      <Text style={{fontSize:20,fontWeight:'bold'}}>{hero.name}</Text> 
                      </View>
                    </View>
                  )
                })
              }
 
            </Swiper>
          </View>
          :
            <View style={styles.intro}>
              <Text style={[styles.introText,{fontWeight:'bold',fontSize:24}]} >Welcome to Hero App</Text>
              <Text style={styles.introText}>You can search hero infomation here</Text>
              <Text style={styles.introText}>Click Hero's image or name to browse details</Text>
              <View style={styles.iconText}>
                  <Text style={styles.introText}>Click</Text> 
                  <Icon
                  containerStyle={{paddingHorizontal:5}}
                  name={'heart'}
                  type='font-awesome-5'
                  color={'#000'}
                  /> 
                  <Text style={styles.introText}>to add hero into your favourite list</Text>
              </View>
              <View style={styles.iconText}>
                  <Text style={styles.introText}>Click</Text> 
                  <Icon
                  containerStyle={{paddingHorizontal:5}}
                  name={'heart'}
                  solid
                  type='font-awesome-5'
                  color={'#fb3640'}
                  /> 
                  <Text style={styles.introText}>to remove hero from your favourite list</Text>
              </View>
              <View style={styles.iconText}>
                  <Text style={styles.introText}>Click</Text> 
                  <Icon
                  containerStyle={{paddingHorizontal:5}}
                  name={'plus'}
                  type='font-awesome-5'
                  color={'#000'}
                  /> 
                  <Text style={styles.introText}>to add hero into your carousel list</Text>
              </View>
              <View style={styles.iconText}>
                  <Text style={styles.introText}>Click</Text> 
                  <Icon
                  containerStyle={{paddingHorizontal:5}}
                  name={'minus'}
                  solid
                  type='font-awesome-5'
                  color={'#000'}
                  /> 
                  <Text style={styles.introText}>to remove hero from your carousel list</Text>
              </View>
            </View>
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  intro:{
    padding:10,
    height:200,
    backgroundColor:"#ced4da"
  },
  introText:{
    fontSize:16,
    paddingVertical:2
  },
  iconText:{
    flexDirection:'row',
    alignItems:'center',
  },
  wrapper: {},
  slide: {
    flexDirection:'row',
  },
  avatar:{
    width:200,
    height:200,
    resizeMode:'cover'
  },
});

module.exports = HeroCarousel;