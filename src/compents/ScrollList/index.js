import React,{Component} from 'react';
import {render} from 'react-dom';

export default class ScrollList extends Component {

    componentWillReceiveProps(nextProps){
        console.log('xxx')
        let elementScroll=nextProps.element;
        elementScroll.addEventListener('scroll',() => {
            // let {offsetHeight,scrollHeight,scrollTop} = nextProps.element;
            // if(offsetHeight + scrollTop + 20 > scrollHeight){
            //     console.log('获取数据！');
            // }
            clearTimeout( this.timer );
            this.timer=setTimeout(() => {
                let {offsetHeight,scrollHeight,scrollTop} = nextProps.element;
                let {hasMore , isLoad , loadMore}=this.props;
                if(offsetHeight + scrollTop + 20 > scrollHeight && hasMore && !isLoad){
                    loadMore();
                }
            },30)

        })
    }
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}