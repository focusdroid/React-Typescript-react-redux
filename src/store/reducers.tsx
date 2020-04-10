import { ModifyAction } from './actions'
import { ADD, LESSEN } from './const'

// 对action进行限制，必须是在ModifyAction定义的
const countReducer = (state = 0, action:ModifyAction):number => {
    switch (action.type) {
        case ADD:
            return state + 1
        case LESSEN:
            return state - 1
        default:
            return state
    }
}


export default countReducer