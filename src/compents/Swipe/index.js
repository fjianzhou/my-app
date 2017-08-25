import React,{Component} from 'react';
import {render} from 'react-dom';
import ReactSwipe from 'react-swipe'
import './index.less'
    ''
export default class Swipe extends Component{
    constructor(){
        super();
        this.state={
            index:0,
        }
    }

    render(){
        let opt={
            continuous:true,
            auto:3000,
            callback: (index) => {
                this.setState({
                    index:index,
                })
            },
        }
        return(
            <div className="swipeList" >
                {this.props.swipeData.length?
                    <ReactSwipe swipeOptions={opt}>
                        {this.props.swipeData.map((item,index) => (
                             <div key={index}>
                                 <img src={item} alt=""/>
                             </div>
                        ))}
                    </ReactSwipe>
                    :
                    null
                }
                {this.props.swipeData.length?
                    <div className="swipe-foot">
                        {this.props.swipeData.map((item,index) => (
                            <span key={index} className={this.state.index===index?'current':''}></span>
                        ))}
                    </div>
                    :
                    null
                }
            </div>
        )

    }
}