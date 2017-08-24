import React, {Component} from 'react';
import {render} from 'react-dom';
import * as action from '../../redux/action/home'
import {connect} from 'react-redux'

import HomeHeader from '../../compents/HomeHeader'
 class Home extends Component {
    constructor(){
        super();
    }
    selectedLesson= (val) => {
        this.props.setCurrentLesson(val);
        console.log(val);
    }
    render() {
        return(
            <div>
                <HomeHeader selectedLesson={this.selectedLesson}/>
            </div>
        )

    }
}

export default connect(state =>({...state}),action)(Home)