import { MenuStore } from '../stores/MenuStore';
import { ReviewStore } from '../stores/ReviewStore';

export interface IRestaurantItem {
    id: string;
    name: string;
    description: string;
    workingHours: string;
    address: string;
    telephoneNumber: string;
    isHidden: number;
}

export enum RestaurantState {
    hidden = 0,
    visible = 1
}

export class Restaurant implements IRestaurantItem {
    public data: IRestaurantItem;
    public id: string;
    public name: string;
    public description: string;
    public workingHours: string;
    public address: string;
    public telephoneNumber: string;
    public isHidden: RestaurantState;
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
        if (this.isHidden == 0) {
            this.isHidden = 1;
        } else {
            this.isHidden = 0;
        }
    }

    public setId(value: string) {
        this.id = value;
    }

    public setName(value: string) {
        this.name = value;
    }

    public setDesc(value: string) {
        this.description = value;
    }

    public setHours(value: string) {
        this.workingHours = value;
    }

    public setAddress(value: string) {
        this.address = value;
    }

    public setPhone(value: string) {
        this.telephoneNumber = value;
    }
}