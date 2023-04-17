import { IFoodFastService } from '@/services/IFoodFastService'
import { RestService } from '@/services/RestService';
import { RestaurantStore } from './RestaurantStore';

export class RootStore {
    public Service: IFoodFastService;
    public RestaurantStore: RestaurantStore;

    public constructor() {
        this.Service = new RestService();
        this.RestaurantStore = new RestaurantStore();
    }

    
}