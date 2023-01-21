import { action } from "../../types";
import { CHANGE_FILTER } from "../actionTypes";

const filterValueReducer = (state = [], action: action) => {
    switch (action.type) {

        case CHANGE_FILTER:
            const value: string = action.payload
            const filterValue: Array<string> = state;

            if (!filterValue.includes(value)) {
                return [...filterValue, value]
            } else {
                const copyFilterValue = [...filterValue];
                copyFilterValue.splice(copyFilterValue.indexOf(value), 1)
                return [...copyFilterValue]
            }

        default:
            return state

    }
}

export default filterValueReducer;