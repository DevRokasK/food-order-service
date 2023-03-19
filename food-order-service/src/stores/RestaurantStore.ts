import { makeObservable, observable, computed, action, runInAction } from 'mobx';
import { Restaurant } from '../models/Restaurant';

export class RestaurantStore {
    @observable public Restaurants: Restaurant[] = [];

    public constructor() {
        makeObservable(this);
    }

    @action AddToStore(data: Restaurant) {
        this.Restaurants.push(data);
    }

    @action DeleteRestaurant() {
        
    }
}