export class Post {
    id: number;
    data: string;
    title: string;
    date: Date;
    constructor(data: string, title: string) {
        this.data = data;
        this.title = title;
    }
}
