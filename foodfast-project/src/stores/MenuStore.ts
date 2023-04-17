import { Menu } from '../models/Menu';

export class MenuStore {
    public Menu: Menu[];

    public constructor() {
        this.Menu = [];
    }

    AddToStore(data: Menu) {
        this.Menu.push(data);
    }

    DeleteMenuItem(data: Menu) {
        this.Menu = this.Menu.filter((r) => r !== data);
    }

}