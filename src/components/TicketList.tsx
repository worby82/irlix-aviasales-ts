import TicketItem from "./TicketItem";

import { ticketList } from "../utils/bem";
import "../css/ticket-list.css"

import { ticketListProps } from "../types";

const TicketList = ({ tickets }: ticketListProps) => {
    return (
        <ul className={ticketList()}>
            {
                tickets.map((item, id) => {
                    return <TicketItem
                        key={id}
                        price={item.price}
                        iata={item.carrier}
                        segments={item.segments}
                    />
                })
            }
        </ul>
    )
}

export default TicketList;