import React,{Component} from 'react'
import {render} from 'react-dom';
import logoImage from '../../common/images/profile.png'
import MHeader from '../../compents/MHead';
import './index.less'
export default class Login extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="login">
                <MHeader title="登陆"/>
                <img src={logoImage} alt=""/>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input type="text" placeholder="账号"/>
                    </li>
                    <li className="list-group-item">
                        <input type="pwd" placeholder="密码"/>
                    </li>
                    <li className="list-group-item">
                        <input type="button" value="登陆"/>
                    </li>
                </ul>



            </div>
        )
    }
}