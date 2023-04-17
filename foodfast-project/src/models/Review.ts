
export interface IReviewItem {
    id: string;
    author: string;
    score: number;
    comment: string;
}

export class Review implements IReviewItem {
    public id: string;
    public author: string;
    public score: number;
    public comment: string;

    public constructor(data: IReviewItem) {
        this.initFromData(data);
    }

    public initFromData(data: IReviewItem) {
        this.id = data.id;
        this.author = data.author;
        this.score = data.score;
        this.comment = data.comment;
    }
}