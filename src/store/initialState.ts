// import { IState } from "../interface";

const initialState = {
    searchId: null,
    stop: false,
    tickets: undefined,
    ticketCount: 5,

    filterValue: undefined,
    filterTickets: undefined,

    activeTab: 'minPrice',
    sortedTickets: undefined
}

export default initialState;