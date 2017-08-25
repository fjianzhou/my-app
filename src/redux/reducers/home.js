import * as Type from '../action-types'

let initState={
    selectLessonId:0,
    swipeImages:[],
    lessons:{
        lessonList:[],
        isLoad:false,
        hasMore:true,
        limit:3,
        offset:0,

    }
}

export default function ( state = initState , action ){
    switch (action.type){
        case Type.SET_LESSON_ID:
            return {...state,selectLessonId:action.val,lessons:{...state.lessons,offset:0,lessonList:[]}};
        case Type.GET_SWIPE_IMG:
            return {...state,swipeImages:action.slider};
        case Type.GET_LESSON_List:
            return {...state,lessons:{
                ...state.lessons,
                offset:state.lessons.offset+action.lessons.lessons.length,
                hasMore:action.lessons.hasMore,
                isLoad:false,
                lessonList:[...state.lessons.lessonList,...action.lessons.lessons]
            }};
        case Type.SET_ISLOAD:
            return {...state,lessons:{...state.lessons,isLoad:true}};

    }
    return state;
}