import * as Type from '../action-types'

let initState={
    selectLessonId:0,
}

export default function ( state = initState , action ){
    switch (action.type){
        case Type.SET_LESSON_ID:
            return {...state,selectLessonId:action.val};
    }
    return state;
}