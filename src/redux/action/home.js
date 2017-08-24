import * as Type from '../action-types'

export function setCurrentLesson(val){
    return{
        type:Type.SET_LESSON_ID,
        val
    }
}