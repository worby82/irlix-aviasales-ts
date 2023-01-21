import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTickets } from "../store/actions";

import Checkbox from "./Checkbox";

import { filterItem } from "../utils/bem";
import "../css/filter-item.css"

import { IState } from "../interface";
import { filterItemProps } from "../types";

const FilterItem = ({ value, text, tickets, stop }: filterItemProps) => {
    const dispatch = useDispatch();

    const filterValue = useSelector((state: IState) => state.filterValue);

    useEffect(() => {
        if (stop === true) {
            dispatch(filterTickets({ filterValue, tickets }))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stop, filterValue])

    return (
        <li className={filterItem()}><Checkbox name='filter' value={value} text={text} /></li>
    );
}

export default FilterItem;