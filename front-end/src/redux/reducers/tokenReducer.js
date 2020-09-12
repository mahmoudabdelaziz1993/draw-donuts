import { FETCH_TOKEN } from '../actions/types'
export default function ( state="", action ){
 switch (action.type) {
     case FETCH_TOKEN:
         return action.payload;
     default:
        return state;
 }
}