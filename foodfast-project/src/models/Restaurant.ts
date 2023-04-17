import { MenuStore } from '../stores/MenuStore';
import { ReviewStore } from '../stores/ReviewStore';

export interface IRestaurantItem {
    id: string;
    name: string;
    description: string;
    workingHours: string;
    address: string;
    telephoneNumber: string;
    isHidden: boolean;
}

export class Restaurant implements IRestaurantItem {
    public data: IRestaurantItem;
    public id: string;
    public name: string;
    public description: string;
    public workingHours: string;
    public address: string;
    public telephoneNumber: string;
    public isHidden: boolean;
    public MenuStore: MenuStore = new MenuStore();
    public ReviewStore: ReviewStore = new ReviewStore();

    public constructor(data: IRestaurantItem) {
        this.initFromData(data);
    }

    public initFromData(data: IRestaurantItem) {
        this.data = data;
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.workingHours = data.workingHours;
        this.address = data.address;
        this.telephoneNumber = data.telephoneNumber;
        this.isHidden = data.isHidden;
    }

    public hideRestaurant() {
        this.isHidden = !this.isHidden;
    }
}