import * as Type from '../action-types'

let initState={
    userInfo:{},
}
export default function ( state =initState , action) {
    switch (action.type){
        case Type.SET_USER_INFO:
            console.log(action.user)
            return   {...state,userInfo:action.user}
    }
    return state;
}
