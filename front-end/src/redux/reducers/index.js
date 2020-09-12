import { combineReducers } from 'redux'
import authReducer from './authReducer'
import tokenReducer from './tokenReducer'
import snackReducer from './snackReducer'
const rootReducer  = combineReducers(
    {  snakbar : snackReducer,
       auth:authReducer ,
       token : tokenReducer
    })

    export default rootReducer ;