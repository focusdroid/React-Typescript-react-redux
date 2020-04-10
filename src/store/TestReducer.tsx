import {ModifyAction} from "./actions";
import {ADD, LESSEN} from "./const";

const testReducer = (state: number | string = '', action:ModifyAction) => {
    switch (action.type) {
        case ADD:
            return state = '++'
        case LESSEN:
            return state = action.value
        default:
            return state
    }
}

export default testReducer