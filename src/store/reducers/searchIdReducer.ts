import { action } from "../../types";
import { LOAD_SEARCH_ID } from "../actionTypes";

const searchIdReducer = (state = null, action: action) => {
    switch (action.type) {

        case LOAD_SEARCH_ID:
            return action.payload

        default:
            return state

    }
}

export default searchIdReducer;