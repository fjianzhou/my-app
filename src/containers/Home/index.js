import React, {Component} from 'react';
import {render} from 'react-dom';
import * as action from '../../redux/action/home'
import {connect} from 'react-redux'
import util from '../../util'
import HomeHeader from '../../compents/HomeHeader'
import Swipe from '../../compents/Swipe';
import ScrollList from '../../compents/ScrollList';

import './index.less'
 class Home extends Component {
    constructor(){
        super();
        this.state={
            ss:'',
        }

    }
    componentDidMount = () => {
        // this.setState({
        //     ss:'xxx'
        // })
        if(this.props.home.lessons.lessonList.length===0){
            this.props.getSwipeImage();
            this.props.getLessonList();
        }
        else {
            this.refs.scroll.scrollTop=util.get('scrollHeight');
            this.forceUpdate();
        }
    }
    componentWillUnmount(){
        console.log(this.refs.scroll.scrollTop);
        util.set('scrollHeight',this.refs.scroll.scrollTop);
    }
    selectedLesson= (val) => {
        console.log(val);
        this.props.setCurrentLesson(val);
        this.props.getLessonList();
    }

    loadMore = () => {
        this.props.getLessonList();
    }
    render() {
        let {hasMore,isLoad} =this.props.home.lessons;
        return(
            <div>
                <div className="lesson-content" ref="scroll">
                    <ScrollList element={this.refs.scroll} hasMore={hasMore} isLoad={isLoad} loadMore={this.loadMore}>
                        <Swipe swipeData={this.props.home.swipeImages}></Swipe>
                        {
                            this.props.home.lessons.lessonList.length?
                                <div className="lesson-list">
                                    <h3 className="title"><i className="iconfont icon-book"></i>全部课程</h3>
                                    {this.props.home.lessons.lessonList.map((item,index)=>(
                                        <div key={index} className="lesson-item">
                                            <img src={item.url}/>
                                            <p>{item.lesson}</p>
                                            <strong>{item.price}</strong>
                                        </div>
                                    ))}
                                </div>
                                :
                                <div>没有数据！</div>
                        }
                    </ScrollList>
                </div>
                <HomeHeader selectedLesson={this.selectedLesson}/>
            </div>
        )

    }
}

export default connect(state =>({...state}),action)(Home)