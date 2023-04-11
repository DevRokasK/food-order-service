import { Restaurant } from '@/models/Restaurant';
import { RestaurantStore } from '@/stores/RestaurantStore';
import { RootStore } from '@/stores/RootStore';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router'
import { DetailsListLayoutMode, SelectionMode, IColumn, DetailsList, Panel, Selection, PanelType, Link as link } from '@fluentui/react';

export interface IRestaurantListProps {
    store: RestaurantStore;
    restaurantState: string;
}

export class RestaurantList extends React.Component<IRestaurantListProps> {
    private columns: IColumn[];

    public constructor(props: IRestaurantListProps) {
        super(props);
        console.log(props.restaurantState);

        this.columns = [
            {
                key: 'column1',
                name: 'Restaurant Id',
                fieldName: 'id',
                minWidth: 70,
                maxWidth: 90,
                isRowHeader: true,
                isResizable: true,
                data: 'string',
                isPadded: true,
            },
            {
                key: 'column2',
                name: 'Name',
                fieldName: 'name',
                minWidth: 100,
                maxWidth: 120,
                isResizable: true,
                data: 'string',
                isPadded: true
            },
            {
                key: 'column3',
                name: 'Description',
                fieldName: 'description',
                minWidth: 100,
                maxWidth: 120,
                isResizable: true,
                isCollapsible: true,
                data: 'string',
                isPadded: true
            },
            {
                key: 'column4',
                name: 'Open between',
                fieldName: 'workingHours',
                minWidth: 100,
                maxWidth: 120,
                isResizable: true,
                isCollapsible: true,
                data: 'string'
            },
            {
                key: 'column5',
                name: 'Address',
                fieldName: 'address',
                minWidth: 100,
                maxWidth: 120,
                isResizable: true,
                isCollapsible: true,
                data: 'string'

            },
            {
                key: 'column6',
                name: 'Phone',
                fieldName: 'telephoneNumber',
                minWidth: 70,
                maxWidth: 90,
                isResizable: true,
                isCollapsible: true,
                data: 'string'
            },
            {
                key: 'column7',
                name: 'Hidden',
                fieldName: 'isHidden',
                minWidth: 70,
                maxWidth: 90,
                isResizable: true,
                isCollapsible: true,
                data: 'boolean',
            },
        ];
    }

    public componentDidMount(): void {
        this.props.store.Init(this.props.restaurantState).then();
    }

    public componentDidUpdate(prevProps: IRestaurantListProps): void {
        if (prevProps.restaurantState !== this.props.restaurantState) {
            this.props.store.Init(this.props.restaurantState).then();
        }
    }

    public render() {
        const columns = this.columns;
        const items = this.props.store.Restaurants.slice();

        return (
            <div className="grid-container">
                <div className='header'>
                    <div className='header-content'>
                        <div className='header-logo'>
                            <img src="https://i.ibb.co/rHDMF1F/FF-logo.png" alt="FoodFast logo" className='logo' />
                        </div>
                        <div className='header-name'>
                            <Link href="/">FoodFast</Link>
                        </div>
                    </div>
                </div>
                <div className='navigation'>
                    <div className='admin-navigation-content'>
                        <div className='admin-command-bar'>
                            <button className='navigation-right-button'><Link href={{ pathname: "/admin/list", query: { filter: '' } }}>All restaurants</Link></button>
                            <button className='navigation-right-button'><Link href={{ pathname: "/admin/list", query: { filter: 'false' } }}>Visible</Link></button>
                            <button className='navigation-right-button'><Link href={{ pathname: "/admin/list", query: { filter: 'true' } }}>Hidden</Link></button>
                        </div>
                    </div>
                </div>
                <div className='main-admin'>
                    <div className="details-list-wrapper">
                        <div className="details-list">
                            <DetailsList
                                items={items}
                                columns={columns}
                                selectionMode={SelectionMode.multiple}
                                layoutMode={DetailsListLayoutMode.justified}
                                isHeaderVisible={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private selectRestaurant = (restaurant: Restaurant) => {
        this.props.store.SetSelectedRestaurant(restaurant);
    }

    private onPanelDismis = () => {
        this.props.store.DeselectRestaurant();
    }
}

export default function List() {
    const store = new RootStore();
    const router = useRouter();
    //const data = router.query;
    const data = "true";

    return (
        <RestaurantList store={store.RestaurantStore} restaurantState={data}></RestaurantList>
    );
}