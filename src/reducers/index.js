import { combineReducers } from 'redux'
import counterReducer from './counter'
import addressReducer from './address'

const rootReducer = combineReducers({
  count: counterReducer,//reducer的拆分，可以根据业务将reducer在这里进行拆分
  address: addressReducer
})

export default rootReducer
