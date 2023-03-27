import { makeObservable, observable, computed, action, runInAction } from 'mobx';
import { Review } from '../models/Review';

export class ReviewStore { 
    @observable public Reviews: Review[] = [];
    @observable public isNotLoaded: boolean = true;

    public constructor() {
        makeObservable(this);
    }

     @action AddToStore(data: Review) {
        this.Reviews.push(data);
     }

     @action DeleteReview(data: Review) {
        this.Reviews = this.Reviews.filter((r) => r !== data);
     }
    
     @action async GetReview() {
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