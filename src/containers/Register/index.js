import React,{Component} from 'react';
import {render} from 'react-dom';
import MHead from '../../compents/MHead'
import {Link} from 'react-router-dom'
import logoImage from '../../common/images/profile.png'
import * as action from '../../redux/action/user'
import './index.less';
import {connect} from 'react-redux'
class Register extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            pwd:''
        }
    }
    login=()=>{
        console.log('login')
        this.props.reg(this.state);
    }
    render(){
        return(
            <div className="register">
                <MHead title='注册'/>
                <img src={logoImage} alt=""/>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input className="form-control" value={this.state.name}  placeholder="账号" type="text"
                               onChange={
                                   (e) => {
                                       this.setState({name:e.target.value});
                                   }
                               } />
                    </li>
                    <li className="list-group-item">
                        <input  className="form-control"   value={this.state.pwd} type="passWord" placeholder="密码"
                                onChange={(e) => {
                                    this.setState({pwd:e.target.value});
                                }}/>
                    </li>
                    <li className="list-group-item">
                        <button  className="btn btn-primary form-control login-btn" onClick={this.login} >注册</button>
                    </li>
                </ul>
            </div>
        )
    }
}
export default  connect(state=>({...state}),action)(Register);
