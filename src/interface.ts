export interface IState {
    searchId: number | null,
    stop: boolean,
    tickets: Array<any>,
    ticketCount: number,

    filterValue: Array<string>,
    filterTickets: Array<any>,

    activeTab: string,
    sortedTickets: Array<any>
}

export interface ISegment {
    date: string,
    duration: number,
    stops: Array<string>,
    destination: string,
    origin: string
}

export interface ITicketItem {
    price: number,
    carrier: string,
    segments: Array<ISegment>
}