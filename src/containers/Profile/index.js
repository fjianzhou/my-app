import React,{Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router-dom'
import loginImge from '../../common/images/profile.png';
import './index.less';
import {connect} from 'react-redux'
import * as action from '../../redux/action/user';

class Profile extends Component{

    constructor(){
        super();
        this.state={
            name:'xxx',
            pwd:'',
        }

    }
    render(){
        console.log(this.props);
        return(
            <div className="profile">
                <div className="profile_box" >
                    <img src={loginImge} alt=""/>
                    {
                        this.props.user.userInfo.name?
                        <a className="login">{this.props.user.userInfo.name}</a>
                        :
                        <Link className="login" to="/login">登陆</Link>
                    }

                </div>
            </div>
        )
    }
}
export default  connect((state)=>({...state}),action)(Profile)