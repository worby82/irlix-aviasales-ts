import { useDispatch, useSelector } from "react-redux";
import { increaseTicketCount } from "../store/actions";

import { buttonLoading } from "../utils/bem";
import "../css/button-loading.css";

import { IState } from '../interface';

const ButtonLoading = () => {
    const dispatch = useDispatch();
    const ticketCount = useSelector((state: IState) => state.ticketCount);

    const onShowTickets = () => {
        const newCount = ticketCount + 5
        dispatch(increaseTicketCount(newCount))
    }

    return (
        <button className={buttonLoading()} onClick={onShowTickets}>Показать еще 5 билетов!</button>
    );
}

export default ButtonLoading;