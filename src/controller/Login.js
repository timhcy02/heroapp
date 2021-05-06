
import Server from '../service/server/server.js';
import AsyncStorage from '@react-native-community/async-storage';
const Actions = require('Redux').Action;

import i18 from 'i18';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (data)=>{
        let message = ''

        dispatch(Actions.loading.api('login'));
        return Server.login(data).then(resp => {
            dispatch(Actions.loading.apiSuccess('login'));
            if(!resp.internetError) {
                if(resp.message == 'The request timed out.') {
                    message = i18['Server Busy']
                    dispatch(Actions.main.updateMessageAlert(message));
                    return false
                }
              
                // console.log("login", resp)	
                let message = '';
                // dispatch(Actions.loading.apiSuccess('login'));
                // dispatch(Actions.auth.loggedInUser(resp)); 
                if (parseInt(resp.code) === 200) {
                    var login_date = new Date();
                    var password_status = 
                        (typeof resp.password_status !== "undefined") ? 
                        resp.password_status : "SUCCESS";
                        
                    var user = {
                        'user_id': resp.user_id, 
                        'is_keep_login': true, 
                        'login_date': login_date, 
                        'is_temp': 'no'
                    };

                    if(resp.card_expired == 'YES') {
                        message = i18['LOGIN_WARNING_CARD_EXPIRED']
                        dispatch(Actions.main.updateMessageAlert(message));
                        dispatch(Actions.loading.apiSuccess('login'));
                        return false
                    }
                    // Auth.setUser(user);
                    // Global.setLogin();

                    // var userAccount = {'card_num': $scope.user.card_num, 'login_name': $scope.user.name};
                    // window.localStorage['userAccount'] = JSON.stringify(userAccount);

                    // Logger.logDebug("Get account information: " + JSON.stringify(user));

                    return Server.fetchAccountInfo(user).then(infoResp => {
                        console.log("fetchAccountInfo1", infoResp)

                        if (parseInt(infoResp.code) === 200) {
                            var pattern = /(\d{4})(\d{2})(\d{2})/;
                            var accountInfo = infoResp.account_info;
                            accountInfo.user_id = resp.user_id;
                            accountInfo.login_name = data.loginId?data.loginId:resp.username;
                            accountInfo.password_status = resp.password_status;
                            accountInfo.oldPassword = data.password;
                            accountInfo.keepLogin = data.keepLogin;
                            accountInfo.email = resp.email;
                            accountInfo.expiryDate = new Date(accountInfo.points_expiry.replace(pattern, '$1-$2-$3'));
                            let storeLogin = {
                                login_name: data.loginId,
                                cardNo: accountInfo.cardNo
                            }
                            dispatch(Actions.setting.storeLoginInfo(storeLogin))
                            dispatch(Actions.auth.loggedInUser(accountInfo))
                            return true

                            // $state.go(password_status == 'SUCCESS' ? 'tab.account' : 'tab.change-password');
                        } else {
                            message = i18['LOGIN_ERROR_SERVER_FAIL']
                            dispatch(Actions.main.updateMessageAlert(message));
                        }
                        
                        Server.fetchMessage(resp.user_id).then(messageResp => {	
                            if(!messageResp.internetError) {
                                return dispatch(Actions.main.fetchMessage(messageResp));
                            }else {
                                return []
                            }
                            return messageResp
                            // return true;
                        })
                        .catch(error => {
                            console.warn('fetchMessage error',error);
                            Alert.alert(
                                '',
                                error,
                                [
                                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                                ]
                            )
                            return false;
                        })
                
                        dispatch(Actions.loading.apiSuccess('login'));

                    })

                } else if (parseInt(resp.code) == 400) {
                    var msg = resp.message;
                    switch (msg) {
                        case "account_null":
                            // $scope.error.account = true;
                            break;
                        case "password_null":
                            // $scope.error.password = true;
                            break;
                        case "agree_tnc_false":
                            // $scope.error.tnc = true;
                            break;
                        case "login_fail":
                        case "call_api_fail":
                            message = i18['LOGIN_ERROR_SERVER_FAIL']
                            dispatch(Actions.main.updateMessageAlert(message));

                            break;
                        case "system_error":
                            message = i18['LOGIN_ERROR_SERVER_FAIL']
                            dispatch(Actions.main.updateMessageAlert(message));
                            break;
                    }
                    dispatch(Actions.loading.apiSuccess('login'));
                    return false
                }
            }else {
                dispatch(Actions.loading.apiSuccess('login'));
                return false
            }	
        }).catch(error => {
            // console.warn('error',error);
            dispatch(Actions.loading.apiError('login'));
            if (error) {
                var err = JSON.parse(error);
                if (err) {
                    alert(err.message);
                } else {
                    alert(error);
                }
            }
            return false;
        })
    },

    }
}

module.exports = mapDispatchToProps;