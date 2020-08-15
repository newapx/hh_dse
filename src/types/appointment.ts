import dayjs from 'dayjs';

export class Appointment {
    complete = false;
    
    constructor (public name: string = "New Appointment", public date: Date = new Date(), public note?: string) {

    }

    static dateToShow(v: Appointment) {
        return dayjs(v.date).format('YYYY-MM-DD HH:mm')
    }
}