import { SET_SNACK } from '../actions/types'
export default function (state={
    open :false,type:"success",message :"This is a success message!"
},action){
    switch (action.type) {
        case SET_SNACK:
            return {...state , ...action.payload};
        default:
            return state;
    }

}