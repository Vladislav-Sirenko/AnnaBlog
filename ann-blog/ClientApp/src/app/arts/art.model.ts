import { ArtPhoto } from './artPhoto.model';

export class Art {
    id: number;
    data: string;
    photos: Array<ArtPhoto> = [];
    date: Date;
    constructor(data: string) {
        this.data = data;
    }
}
