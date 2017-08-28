import React,{Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router-dom'
import loginImge from '../../common/images/profile.png';
import './index.less';
export default class Profile extends Component{
    render(){
        return(
            <div className="profile">
                <div className="profile_box" >
                    <img src={loginImge} alt=""/>
                    <Link className="login" to="/login">登陆</Link>
                </div>
            </div>
        )
    }
}