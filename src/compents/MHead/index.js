import React,{Component} from 'react';
import {render} from 'react-dom';
import {withRouter} from 'react-router-dom';
import './index.less'

class MHead extends Component{
    constructor(){
        super();
    }
    back= () =>{
       this.props.history.goBack();
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

export default withRouter(MHead);