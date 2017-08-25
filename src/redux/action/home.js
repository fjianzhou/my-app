import * as Type from '../action-types';
import {getSliderApi,getLessonListApi} from '../../api/home'

export function setCurrentLesson(val){
    return{
        type:Type.SET_LESSON_ID,
        val
    }
}

export const getSwipeImage= () => (dispatch) => {
    getSliderApi().then(slider => {
        dispatch({
            type:Type.GET_SWIPE_IMG,
            slider
        })
    })
}

export const getLessonList = () => (dispatch,getState) =>{
    let{selectLessonId,lessons:{hasMore,limit,offset}} = getState().home;
    if(!hasMore){
        return;
    }
    dispatch({
        type:Type.SET_ISLOAD,
    })
    getLessonListApi(selectLessonId,offset,limit).then( lessons => {
        dispatch({
            type:Type.GET_LESSON_List,
            lessons
        })
    })
}