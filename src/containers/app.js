import React,{Component} from 'react';
import {render} from 'react-dom';
import Tab from '../compents/Tab'

export default class Profile extends Component{
    render(){
        return(
            <div >
                {this.props.children}
                <Tab/>
            </div>
        )
    }
}