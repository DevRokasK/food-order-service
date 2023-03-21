import { makeObservable, observable, computed, action, runInAction } from 'mobx';
import { Restaurant, IRestaurantItem } from '../models/Restaurant';
import { DummyService } from '../services/DummyService';

export class RestaurantStore {
    @observable public Restaurants: Restaurant[] = [];

    public constructor() {
        makeObservable(this);
        this.GetRestaurnats();
        console.log(this.Restaurants);
    }

    @action AddToStore(data: Restaurant) {
        this.Restaurants.push(data);
    }

    @action DeleteRestaurant(data: Restaurant) {
        this.Restaurants = this.Restaurants.filter((r) => r !== data);
    }

    @action GetRestaurnats() {
        this.AddToStore(new Restaurant({
            id: "1",
            name: "Grill London",
            description: "..",
            workingHours: "...",
            address: "...",
            telephoneNumber: "...",
        }))
        this.AddToStore(new Restaurant({
            id: "1",
            name: "Grill London",
            description: "..",
            workingHours: "...",
            address: "...",
            telephoneNumber: "...",
        }))
        this.AddToStore(new Restaurant({
            id: "2",
            name: " London",
            description: "..",
            workingHours: "...",
            address: "...",
            telephoneNumber: "...",
        }))
        this.AddToStore(new Restaurant({
            id: "3",
            name: "Grill ",
            description: "..",
            workingHours: "...",
            address: "...",
            telephoneNumber: "...",
        }))
        this.AddToStore(new Restaurant({
            id: "4",
            name: "Brazil",
            description: "..",
            workingHours: "...",
            address: "...",
            telephoneNumber: "...",
        }))
        this.AddToStore(new Restaurant({
            id: "5",
            name: "Grill Brazil",
            description: "..",
            workingHours: "...",
            address: "...",
            telephoneNumber: "...",
        }))
        this.AddToStore(new Restaurant({
            id: "6",
            name: "Brazil London",
            description: "..",
            workingHours: "...",
            address: "...",
            telephoneNumber: "...",
        }))
        this.AddToStore(new Restaurant({
            id: "7",
            name: "Mc'as",
            description: "..",
            workingHours: "...",
            address: "...",
            telephoneNumber: "...",
        }))
    }
}