import Server from 'Server';
import { Platform,NativeModules } from 'react-native';
const Actions = require('Redux').Action;
import i18 from 'i18';

import {
    Alert,
} from 'react-native';

const METHOD_DATA = [{
    data: {
    }
}];

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
        getHero:(text) => {
            dispatch(Actions.loading.api('getHero'));
            return Server.getHero(text).then(resp => {	

                console.log("getHero", typeof resp)
                dispatch(Actions.loading.apiSuccess('getHero'))
                if(!resp.response == 'success') {
                    return false
                }else {
                    return resp.results
                }
                // return true;
            })
            .catch(error => {
                console.warn('getHero error',error);
                Alert.alert(
                    '',
                    error,
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ]
                )
                dispatch(Actions.loading.apiSuccess('getHero'));
                return false;
            })
        },
        updateSavedHeroes:(id) =>{
            dispatch(Actions.hero.updateSavedHeroes(id));
        },
        updateSavedCarousel:(data) =>{
            dispatch(Actions.hero.updateSavedCarousel(data));
        }
    }
}

module.exports = mapDispatchToProps;