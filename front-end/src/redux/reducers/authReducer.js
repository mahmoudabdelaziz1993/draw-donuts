
import { FETCH_USER } from '../actions/types'


export default function (state = {
    createdGraphs: [],
    email: "",
    name: "",
    _id: ""
}, action) {
    switch (action.type) {
        case FETCH_USER:
            return Object.assign(state, action.payload);
        default:
            return state;
    }

}