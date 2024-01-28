import { IEventsFestival } from "@/interfaces/eventsFestival"

export const morningDates = (events: IEventsFestival[]) => {
    return events.filter(event => {
        const parsedDate = new Date(event.date)
        const time = parsedDate.getHours() + 5
        if((time >= 8 && time < 12)){
            return event;
        }
        return null;
    })
}

export const eveningDates = (events: IEventsFestival[]) => {
    return events.filter(event => {
        const parsedDate = new Date(event.date)
        const time = parsedDate.getHours() + 5
        if((time > 11 && time < 19)){
            return event;
        }
        return null;
    })
}

export const nightDates = (events: IEventsFestival[]) => {
    return events.filter(event => {
        const parsedDate = new Date(event.date)
        const time = parsedDate.getHours() + 5
        if((time > 18 && time < 24)){
            return event;
        }
        return null;
    })
}
