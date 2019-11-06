import { TripPhoto } from './tripPhoto.model';

export class Trip {
    id: number;
    data: string;
    photos: Array<TripPhoto> = [];
    constructor(data: string, id: number, photos: Array<TripPhoto>) {
        this.data = data;
        this.id = id;
        this.photos = photos;
    }
}
