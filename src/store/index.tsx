/*使用单个reducer的写法start*/
// import { createStore } from 'redux'
// import reducer from './reducers'
//
//
// const store = createStore(reducer)
//
// export default store
/*使用单个reducer的写法start*/


/*使用多个reducer的写法start*/
import { createStore } from 'redux'

import countReducer from "./reducers";
import testReducer from "./TestReducer";
import { combineReducers } from 'redux'

const reducer = combineReducers({
    countReducer,
    testReducer
})

const store = createStore(reducer)
export default store
/*使用多个reducer的写法end*/