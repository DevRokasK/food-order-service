import { makeObservable, observable, computed, action, runInAction } from 'mobx';
import { Menu } from '../models/Menu';

export class MenuStore {
    @observable public Menu: Menu[] = [];

    public constructor() {
        makeObservable(this);
    }

    @action AddToStore(data: Menu) {
        
        this.Menu.push(data);
    }

    @action DeleteMenuItem() {
        
    }

}