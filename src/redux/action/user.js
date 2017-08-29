import * as Type from '../action-types';
import {regs,logins} from '../../api/user';
import {push} from 'react-router-redux'

export const reg = (data) => (dispath) => {
    regs(data).then(user => {
        if(user.code===200){
            dispath({
                type:Type.SET_USER_INFO,
                user:user.userInfo,
            })
            dispath(push('/profile'));
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
    })
}