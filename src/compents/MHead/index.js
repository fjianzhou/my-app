import React,{Component} from 'react';
import {render} from 'react-dom';
import './index.less'
export default class MHead extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="MHeader">
                <i className="icon-fanhui iconfont" onClick={this.back}></i>
                <span>{this.props.title}</span>
            </div>
        )
    }
}

