
export interface IMenuItem {
    id: string;
    name: string;
    price: number;
}

export class Menu implements IMenuItem {
    public id: string;
    public name: string;
    public price: number;


    public constructor(data: IMenuItem) {
        this.initFromData(data);
    }

    public initFromData(data: IMenuItem) {
        this.id = data.id;
        this.name = data.name;
        this.price = data.price;
    }
}
