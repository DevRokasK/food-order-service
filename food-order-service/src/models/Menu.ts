import { makeObservable, observable, computed, action, runInAction } from 'mobx';

export interface IMenuItem {
    id: string;
    name: string;
    price: number;
}

export class Menu implements IMenuItem {
    @observable public id: string;
    @observable public name: string;
    @observable public price: number;


    public constructor(data: IMenuItem) {
        makeObservable(this);
        this.initFromData(data);
    }

    @action
    public initFromData(data: IMenuItem) {
        this.id = data.id;
        this.name = data.name;
        this.price = data.price;
    }
}