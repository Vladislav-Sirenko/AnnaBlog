import { TripPhoto } from './tripPhoto.model';

export class Trip {
    id: number;
    data: string;
    title: string;
    photos: Array<TripPhoto> = [];
    date: Date;
    constructor(data: string, title: string) {
        this.data = data;
        this.title = title;
    }
}
