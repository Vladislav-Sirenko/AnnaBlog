import { TripPhoto } from './tripPhoto.model';

export class Trip {
    id: number;
    data: string;
    photos: Array<TripPhoto> = [];
    date: Date;
    constructor(data: string) {
        this.data = data;
    }
}
