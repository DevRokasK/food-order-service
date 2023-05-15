import { Restaurant, IRestaurantItem } from '../models/Restaurant';

export class RestaurantStore {
    public Restaurants: Restaurant[] = [];
    public SelectedRestaurant: Restaurant = null;

    public constructor() {
        //this.GetRestaurnats();
    }

    get isRestaurantSelected(): boolean {
        return this.SelectedRestaurant != null;
    }

    public SetSelectedRestaurant(data: Restaurant): void {
        this.SelectedRestaurant = data;
    }

    public DeselectRestaurant() {
        this.SelectedRestaurant = null;
    }

    AddToStore(data: Restaurant) {
        this.Restaurants.push(data);
    }

    DeleteRestaurant(data: Restaurant) {
        this.Restaurants = this.Restaurants.filter((r) => r !== data);
    }

    public async Init(restaurantState: number) {
        this.Restaurants = [];
        this.GetRestaurnats();
        if (restaurantState !== null) {
            this.Restaurants = this.Restaurants.filter((restaurant) => { return restaurant.isHidden === restaurantState });
        }
    }

    public AddRestaurant() {
        const newItem: IRestaurantItem = {
            id: '',
            name: '',
            description: '',
            workingHours: '',
            address: '',
            telephoneNumber: '',
            isHidden: 1
        }
        let newRestaurant: Restaurant = new Restaurant(newItem);
        //this.SetSelectedRestaurant(newRestaurant);
    }

    GetRestaurnats() {
        this.AddToStore(new Restaurant({
            id: "0",
            name: "Grill",
            description: "..",
            workingHours: "...",
            address: "...",
            telephoneNumber: "...",
            isHidden: 1,
        }))
    }
}