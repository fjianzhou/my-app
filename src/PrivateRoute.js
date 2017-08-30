import React,{Component} from 'react';
import {Route,Redirect}from 'react-router-dom'
import {render} from 'react-dom';
import util from './util'

export default class PrivateRoute extends Component{
    constructor(){
        super();
        this.state={
            xxx:false,
            auth:false
        }
    }
    componentWillMount(){
        setTimeout(()=>{
            this.setState({
                xxx:true,
                auth:false
            })
        },3000)
    }
    render(){
        let {component:ProComponent,...rest}=this.props;
        return (
            <Route {...rest} render={
                (props) =>{
                    return this.state.xxx? (this.state.auth?<ProComponent {...props} />:<Redirect to="/login"/>):<div>加载中</div>
                }
            }/>
        )
    }
}