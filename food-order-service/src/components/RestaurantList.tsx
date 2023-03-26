import React from 'react';
import { observer } from 'mobx-react';
import { DetailsListLayoutMode, SelectionMode, IColumn, DetailsList, Panel, Selection, PanelType, Link } from '@fluentui/react';
import { RestaurantStore } from '../stores/RestaurantStore';
import { Restaurant } from '../models/Restaurant';

export interface IRestaurantListProps {
    store: RestaurantStore;
}

@observer
export class RestaurantList extends React.Component<IRestaurantListProps> {
    private columns: IColumn[];
    private selection: Selection;

    public constructor(props: IRestaurantListProps) {
        super(props);

        this.columns = [
            {
                key: 'column1',
                name: 'Restaurant Name',
                fieldName: 'name',
                minWidth: 70,
                maxWidth: 90,
                isRowHeader: true,
                isResizable: true,
                data: 'string',
                isPadded: true,
                onRender:(item: Restaurant) => {
                    return <Link to='/Restaurants/:item'>{item.name}</Link>
                }
            },
            {
                key: 'column2',
                name: 'Open from/to',
                fieldName: 'workingHours',
                minWidth: 70,
                maxWidth: 90,
                isRowHeader: true,
                isResizable: true,
                data: 'string',
                isPadded: true,
            },
            {
                key: 'column3',
                name: 'Address',
                fieldName: 'address',
                minWidth: 70,
                maxWidth: 90,
                isRowHeader: true,
                isResizable: true,
                data: 'string',
                isPadded: true,
            },
            {
                key: 'column4',
                name: 'Phone Number',
                fieldName: 'telephoneNumber',
                minWidth: 70,
                maxWidth: 90,
                isRowHeader: true,
                isResizable: true,
                data: 'string',
                isPadded: true,
            },
        ]
    }

    public render() {
        const columns = this.columns;
        const store = this.props.store;
        const items = store.Restaurants.slice();

        return (
            <div>
                <DetailsList
                    items={items}
                    columns={columns}
                    layoutMode={DetailsListLayoutMode.justified}
                    isHeaderVisible={true}
                />
            </div>
        );
    }
}