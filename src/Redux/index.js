import {combineReducers} from 'redux'
import toDoReducer from './reducer'

const rootReducer =combineReducers({
    toDoReducer,
})
export default rootReducer