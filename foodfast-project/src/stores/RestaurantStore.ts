import { Restaurant, IRestaurantItem } from '../models/Restaurant';

export class RestaurantStore {
    public Restaurants: Restaurant[] = [];
    public SelectedRestaurant: Restaurant = null;

    public constructor() {
        this.GetRestaurnats();
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

    public async Init(restaurantState: string) {
        this.Restaurants = [];
        this.GetRestaurnats();
        if (restaurantState !== "null") {
            this.Restaurants = this.Restaurants.filter((restaurant) => { return restaurant.isHidden.toString() === restaurantState });
        }
    }

    public AddVehicle() {
        const newItem: IRestaurantItem = {
            id: '',
            name: '',
            description: '',
            workingHours: '',
            address: '',
            telephoneNumber: '',
            isHidden: false
        }
        let newRestaurant: Restaurant = new Restaurant(newItem);
        this.SetSelectedRestaurant(newRestaurant);
    }

    GetRestaurnats() {
        this.AddToStore(new Restaurant({
            id: "0",
            name: "Gill London",
            description: "..",
            workingHours: "...",
            address: "...",
            telephoneNumber: "...",
            isHidden: true,
        }))
        this.AddToStore(new Restaurant({
            id: "1",
            name: "Grill London",
            description: "..",
            workingHours: "...",
            address: "...",
            telephoneNumber: "...",
            isHidden: true,
        }))
        this.AddToStore(new Restaurant({
            id: "2",
            name: " London",
            description: "..",
            workingHours: "...",
            address: "...",
            telephoneNumber: "...",
            isHidden: true,
        }))
        this.AddToStore(new Restaurant({
            id: "3",
            name: "Grill ",
            description: "..",
            workingHours: "...",
            address: "...",
            telephoneNumber: "...",
            isHidden: false,
        }))
        this.AddToStore(new Restaurant({
            id: "4",
            name: "Brazil",
            description: "..",
            workingHours: "...",
            address: "...",
            telephoneNumber: "...",
            isHidden: false,
        }))
        this.AddToStore(new Restaurant({
            id: "5",
            name: "Grill Brazil",
            description: "..",
            workingHours: "...",
            address: "...",
            telephoneNumber: "...",
            isHidden: false,
        }))
        this.AddToStore(new Restaurant({
            id: "6",
            name: "Brazil London",
            description: "..",
            workingHours: "...",
            address: "...",
            telephoneNumber: "...",
            isHidden: false,
        }))
        this.AddToStore(new Restaurant({
            id: "7",
            name: "Mc'as",
            description: "..",
            workingHours: "...",
            address: "...",
            telephoneNumber: "...",
            isHidden: false,
        }))
        this.AddToStore(new Restaurant({
            id: "8",
            name: "Hesburger",
            description: "..",
            workingHours: "...",
            address: "...",
            telephoneNumber: "...",
            isHidden: false,
        }))
    }
}