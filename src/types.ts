import { ISegment, ITicketItem } from "./interface"

export type item = {
    value: string,
    name: string
}

export type checkboxProps = {
    name: string,
    value: string,
    text: string
}

export type filterItemProps = {
    value: string,
    text: string,
    tickets: Array<any>,
    stop: boolean
}

export type filterListProps = {
    tickets: Array<any>,
    stop: boolean
}

export type tabItemProps = {
    name: string,
    value: string
}

export type ticketInfoProps = {
    head: string,
    text: string
}

export type ticketInfoWrapProps = {
    segment: ISegment
}

export type ticketItemProps = {
    price: number,
    iata: string,
    segments: Array<ISegment>
}

export type ticketListProps = {
    tickets: Array<ITicketItem>
}

export type action = {
    type: string,
    payload: payload
}

export type payload = any