import { ArtPhoto } from './artPhoto.model';

export class Art {
    id: number;
    data: string;
    title: string;
    photos: Array<ArtPhoto> = [];
    date: Date;
    constructor(data: string, title: string) {
        this.data = data;
        this.title = title;
    }
}
