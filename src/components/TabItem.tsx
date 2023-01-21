import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveTab, sortTickets } from "../store/actions";

import { tabItem } from "../utils/bem";
import "../css/tab-item.css"

import { IState } from "../interface";
import { tabItemProps } from "../types";

const TabItem = ({ name, value }: tabItemProps) => {

    const ticketCount = useSelector((state: IState) => state.ticketCount);
    const activeTab = useSelector((state: IState) => state.activeTab);
    const tickets = useSelector((state: IState) => state.filterTickets);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sortTickets({ tickets, activeTab, ticketCount }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ticketCount, tickets, activeTab])

    const handleSort = (value: string) => {
        dispatch(changeActiveTab(value));
    }


    return (
        <button className={tabItem({ active: value === activeTab })} key={value} onClick={() => handleSort(value)}>{name}</button>
    )
}

export default TabItem;