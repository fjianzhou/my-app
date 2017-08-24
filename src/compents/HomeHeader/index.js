import React,{Component} from 'react';
import {render} from 'react-dom';
import './index.less';
import logo from '../../common/images/logo.png'
export default class HomeHeader extends Component{
    constructor(){
        super();
        this.state={
            isShow:false,
        }
    }
    //切换转台
    switchBtn= () => {
        this.setState({
            isShow:!this.state.isShow,
        })
    }
    //选择课程
    selectedLesson = (e) => {

        this.props.selectedLesson(e.target.getAttribute("type"));
        this.switchBtn();
    }

    render(){
        return(
            <div className="header">
                <div className="header-nav">
                    <img src={logo}/>
                    <div className="menu-btn" onClick={this.switchBtn}>
                        {this.state.isShow? <i className="iconfont icon-guanbi white"></i>: <i className="iconfont icon-uilist white"></i>}

                    </div>
                </div>
                {this.state.isShow?
                    <ul className="lessonList" onClick={this.selectedLesson}>
                        <li type="1">课程2</li>
                        <li type="2">课程2</li>
                        <li type="3">课程3</li>
                        <li type="4">课程4</li>
                    </ul>
                    :
                    null
                }

            </div>
        )
    }
}