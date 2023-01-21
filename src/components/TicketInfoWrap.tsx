import TicketInfo from "./TicketInfo";

import { ticketInfoWrap } from "../utils/bem";
import '../css/ticket-info-wrap.css'
import timeFlight from "../utils/timeFlight";
import { ticketInfoWrapProps } from "../types";

const TicketInfoWrap = ({ segment }: ticketInfoWrapProps) => {
    const formatter = new Intl.DateTimeFormat("ru", {
        hour: "numeric",
        minute: "numeric"
    });

    const dateDeparture: Date = new Date(segment.date);
    const dateArrival: Date = new Date(Date.parse(segment.date) + segment.duration * 60000);

    

    const stops = segment.stops;
    let transfersCount: string = '';

    switch (stops.length) {
        case 1:
            transfersCount = '1 пересадка';
            break;
        case 2:
            transfersCount = '2 пересадки';
            break;
        case 3:
            transfersCount = '3 пересадки';
            break;
        default:
            transfersCount = 'Без пересадок';
    }

    return (
        <div className={ticketInfoWrap()}>
            <TicketInfo head={segment.destination + ' - ' + segment.origin} text={formatter.format(dateDeparture) + ' – ' + formatter.format(dateArrival)} />
            <TicketInfo head='В пути' text={timeFlight(segment)} />
            <TicketInfo head={transfersCount} text={stops.join(', ')} />
        </div>
    );
}

export default TicketInfoWrap;