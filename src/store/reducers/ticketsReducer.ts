import { action } from "../../types";
import { LOAD_TICKETS } from "../actionTypes";

const ticketsReducer = (state = [], action: action) => {
    switch (action.type) {

        case LOAD_TICKETS:
            return [...state, ...action.payload]

        default:
            return state

    }
}

export default ticketsReducer;