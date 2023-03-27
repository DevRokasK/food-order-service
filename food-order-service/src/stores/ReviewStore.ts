import { makeObservable, observable, computed, action, runInAction } from 'mobx';
import { Review } from '../models/Review';

export class ReviewStore { 
    @observable public Reviews: Review[] = [];

    public constructor() {
        makeObservable(this);
    }

     @action AddToStore(data: Review) {
        this.Reviews.push(data);
     }

     @action DeleteReview(data: Review) {
        this.Reviews = this.Reviews.filter((r) => r !== data);
     }
    
}