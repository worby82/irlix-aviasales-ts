import { ticketInfo } from "../utils/bem";
import '../css/ticket-info.css'

import { ticketInfoProps } from "../types";


const TicketInfo = ({ head, text }: ticketInfoProps) => {
    return (
        <div className={ticketInfo()}>
            <p className={ticketInfo('heading')}>{head}</p>
            <p className={ticketInfo('text')}>{text}</p>
        </div>
    );
}

export default TicketInfo;