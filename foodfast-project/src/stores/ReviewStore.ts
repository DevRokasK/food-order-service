import { Review } from '../models/Review';

export class ReviewStore {
    public Reviews: Review[];
    public isNotLoaded: boolean;

    public constructor() {
        this.Reviews = [];
        this.isNotLoaded = true;
    }

    AddToStore(data: Review) {
        this.Reviews.push(data);
    }

    DeleteReview(data: Review) {
        this.Reviews = this.Reviews.filter((r) => r !== data);
    }

    async GetReview() {
        this.AddToStore(new Review({
            id: "0",
            author: "vardenis pavardenis",
            score: 5,
            comment: "Labai skanu!!!!!"
        }))
        this.AddToStore(new Review({
            id: "1",
            author: "Petras Grazulis",
            score: 1,
            comment: "padavejas buvo gejus!!!!!"
        }))
        this.AddToStore(new Review({
            id: "2",
            author: "Jonas Jonaitis",
            score: 4,
            comment: "Skanu, bet nelabai"
        }))
        this.AddToStore(new Review({
            id: "3",
            author: "Petras Petraitis",
            score: 5,
            comment: "Labai skanu!!!!!"
        }))
        this.AddToStore(new Review({
            id: "4",
            author: "Ona Onaite",
            score: 5,
            comment: "Labai skanu!!!!!"
        }))
        this.isNotLoaded = false;
    }
}