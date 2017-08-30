import React,{Component} from 'react'
import {render} from 'react-dom';
import {Link} from 'react-router-dom'
import logoImage from '../../common/images/profile.png'
import MHeader from '../../compents/MHead';
import './index.less';
import {connect} from 'react-redux';
import * as action from '../../redux/action/user'
class Login extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            pwd:'',
        }
    }
    componentDidMount(){
        this.props.auths();
    }

    loginAction= () => {
        console.log(this)
        this.props.login(this.state)
    }
    render(){
        return(
            <div className="login">
                <MHeader title="登陆"/>
                <img src={logoImage} alt=""/>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input className="form-control" value={this.state.name} placeholder="账号" type="text"
                               onChange={
                                   (e) => {
                                       this.setState({name:e.target.value});
                                   }
                               } />
                    </li>
                    <li className="list-group-item">
                        <input  className="form-control" value={this.state.pwd} type="passWord" placeholder="密码"
                                onChange={(e) => {
                                    this.setState({pwd:e.target.value});
                                }}/>
                    </li>
                    <li className="list-group-item">
                        <Link to="/reg">前往注册</Link>
                    </li>
                    <li className="list-group-item">
                        <button  className="btn btn-primary form-control  login-btn"  onClick={this.loginAction}>登陆</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default connect((state)=>({...state}),action)(Login)