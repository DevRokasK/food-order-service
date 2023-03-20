import { makeObservable, observable, computed, action, runInAction } from 'mobx';


export interface IReviewItem {
    id: string;
    author: string;
    score: number;
    comment: string;
}

export class Review implements IReviewItem {
    @observable public id: string;
    @observable public author: string;
    @observable public score: number;
    @observable public comment: string;

    public constructor(data: IReviewItem) {
        makeObservable(this);
        this.initFromData(data);
    }

    @action
    public initFromData(data: IReviewItem) {
        this.id = data.id;
        this.author = data.author;
        this.score = data.score;
        this.comment = data.comment;
    }
}