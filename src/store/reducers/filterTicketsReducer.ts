import { ITicketItem } from "../../interface";
import { action } from "../../types";
import { FILTER_TICKETS } from "../actionTypes";

const filterTicketsReducer = (state = [], action: action) => {

    switch (action.type) {

        case FILTER_TICKETS:
            const filterValue: Array<string> = action.payload.filterValue;
            const tickets: Array<ITicketItem> = action.payload.tickets;

            if (filterValue.includes('all') === false && filterValue.length > 0) {
                return [...tickets.filter(itemFilter =>
                    filterValue.includes(String(itemFilter.segments[0].stops.length))
                    && filterValue.includes(String(itemFilter.segments[1].stops.length))
                )]
            } else {
                return [...tickets]
            }

        default:
            return state
    }
}

export default filterTicketsReducer;