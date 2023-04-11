import { Restaurant } from '@/models/Restaurant';
import { RestaurantStore } from '@/stores/RestaurantStore';
import { RootStore } from '@/stores/RootStore';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router'
import { DetailsListLayoutMode, SelectionMode, IColumn, DetailsList, Panel, Selection, PanelType, Link as link } from '@fluentui/react';
import RestaurantPanel from './RestaurantPanel';

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
        const store = this.props.store;
        const items = this.props.store.Restaurants.slice();

        return (
            <div>
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
                <Panel type={PanelType.medium}
                    isLightDismiss
                    isOpen={store.isRestaurantSelected}
                    onDismiss={this.onPanelDismis}
                    isFooterAtBottom={true}
                >
                    <RestaurantPanel restaurant={store.SelectedRestaurant}></RestaurantPanel>
                </Panel>
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