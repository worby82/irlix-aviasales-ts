import { action } from "../../types";
import { INCREASE_TICKET_COUNT } from "../actionTypes";

const ticketCountReducer = (state = 5, action: action) => {
    switch (action.type) {

        case INCREASE_TICKET_COUNT:
            return action.payload

        default:
            return state
    }
}

export default ticketCountReducer;