import { DEBUG, OFFLINE_MODE, RELEASE_VERSION,ENV } from '../../config/config.js';
import { _get, _post, _put, _delete, _setUser, _upload } from './request.js';
import mockAPI from './mockAPI.json';
import { Platform } from 'react-native';

import DeviceInfo from 'react-native-device-info';

const uniqueId = DeviceInfo.getUniqueID();

let fcmToken = '';


async function getHero(text){
	if(ENV == "PROD"){
		return _get('search/'+text).then(resp => {
			return resp;
		});	
	}
	else{
		if (text)
			return mockAPI;
		else
			return {"response":"fail"}
	}

}



module.exports = {
	getHero
}