import * as Type from '../action-types';
import {regs,logins,auth} from '../../api/user';
import {push} from 'react-router-redux';
import util from '../../util'

export const reg = (data) => (dispath) => {
    regs(data).then(user => {
        if(user.code===200){
            dispath({
                type:Type.SET_USER_INFO,
                user:user.userInfo,
            })
            dispath(push('/profile'));
            util.set('user',user.userInfo)
        }else
        {
            return;
        }
    })
}

export const login = (data) =>(dispath)=>{
    console.log(data);
    logins(data).then((userInfo)=>{

        dispath({
            type:Type.SET_USER_INFO,
            user:userInfo.userInfo,
        })
        dispath(push('/profile'));
        util.set('user',userInfo.userInfo)
    })
}

export const auths= () => (dispath) => {
    auth().then(user=>{
        if(user.code===200){
            console.log('auth',user)
            dispath({
                type:Type.SET_USER_INFO,
                user:user.userInfo,
            })
            util.set('user',user.userInfo)
        }
        else {
            return;
        }

    })

}