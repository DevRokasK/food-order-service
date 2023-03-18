import { makeObservable, observable, computed, action, runInAction } from 'mobx';
import { MenuStore } from '../stores/MenuStore';

export interface IRestaurantItem {
  id: string;
  name: string;
  description: string;
  workingHours: string;
  address: string;
  telephoneNumber: string;
}

export class Restaurant implements IRestaurantItem {
  @observable public data: IRestaurantItem;
  @observable public id: string;
  @observable public name: string;
  @observable public description: string;
  @observable public workingHours: string;
  @observable public address: string;
  @observable public telephoneNumber: string;
  @observable public MenuStore: MenuStore = new MenuStore();

  public constructor(data: IRestaurantItem) {
    makeObservable(this);
    this.initFromData(data);
  }

  @action
  public initFromData(data: IRestaurantItem) {
    this.data = data;
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.workingHours = data.workingHours;
    this.address = data.address;
    this.telephoneNumber = data.telephoneNumber;
  }
}