import { ticketItemProps } from "../types";

const getSortedFunction = (value: string) => {
    switch (value) {
        case 'fast':
            return (prev: ticketItemProps, next: ticketItemProps) => {
                return (prev.segments[0].duration + prev.segments[1].duration) - (next.segments[0].duration + next.segments[1].duration);
            };
        case 'optimal':
            return (prev: ticketItemProps, next: ticketItemProps) => {
                return (prev.segments[0].duration + prev.segments[1].duration) - (next.segments[0].duration + next.segments[1].duration) & prev.price - next.price;
            };
        default:
            return (prev: ticketItemProps, next: ticketItemProps) => prev.price - next.price;
    }
}

export default getSortedFunction;