import { action } from "../../types";
import { CHANGE_ACTIVE_TAB } from "../actionTypes";

const activeTabReducer = (state = 'minPrice', action: action) => {
    switch (action.type) {

        case CHANGE_ACTIVE_TAB:
            return action.payload

        default:
            return state
    }
}

export default activeTabReducer;