import React from 'react';
import { MessageBar, MessageBarType, DetailsListLayoutMode, SelectionMode, Selection, IColumn, DetailsList, Icon } from '@fluentui/react';
import { ICommandBarItemProps } from '@fluentui/react/lib/CommandBar';
import { Label } from '@fluentui/react/lib/Label';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { TextField } from '@fluentui/react/lib/TextField';
import { DatePicker } from '@fluentui/react';
import { Restaurant } from '@/models/Restaurant';

export interface IRestaurantPanelProps {
    restaurant: Restaurant;
}

export default class RestaurantPanel extends React.Component<IRestaurantPanelProps> {
    private selection: Selection;
    private isSelected: boolean = false;

    private classNames = mergeStyleSets({
        fileIconHeaderIcon: {
            padding: 0,
            fontSize: '16px',
        },
        fileIconCell: {
            textAlign: 'center',
            selectors: {
                '&:before': {
                    content: '.',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    height: '100%',
                    width: '0px',
                    visibility: 'hidden',
                },
            },
        },
        fileIconImg: {
            verticalAlign: 'middle',
            maxHeight: '16px',
            maxWidth: '16px',
        },
        controlWrapper: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        exampleToggle: {
            display: 'inline-block',
            marginBottom: '10px',
            marginRight: '30px',
        },
        selectionDetails: {
            marginBottom: '20px',
        },
    });

    public constructor(props: IRestaurantPanelProps) {
        super(props);
    }

    public render() {
        const restaurant = this.props.restaurant;

        return (
            <>{restaurant &&
                <div className="flex-container">
                    <div className='flex-name'>
                        <h2>Restaurant Information</h2>
                    </div>
                    <div className="flex-item">
                        <Label >Id:</Label>
                        <TextField defaultValue={restaurant.id} onChange={(e, value) => restaurant.setId(value)} />
                    </div>
                    <div className='flex-item-gap'></div>
                    <div className="flex-item">
                        <Label >Name:</Label>
                        <TextField defaultValue={restaurant.name} onChange={(e, value) => restaurant.setName(value)} />
                    </div>
                    <div className='flex-item-gap'></div>
                    <div className="flex-item">
                        <Label >Description:</Label>
                        <TextField defaultValue={restaurant.description} onChange={(e, value) => restaurant.setDesc(value)} />
                    </div>
                    <div className='flex-item-gap'></div><div className="flex-item">
                        <Label >Working Hours:</Label>
                        <TextField defaultValue={restaurant.workingHours} onChange={(e, value) => restaurant.setHours(value)} />
                    </div>
                    <div className='flex-item-gap'></div><div className="flex-item">
                        <Label >Address:</Label>
                        <TextField defaultValue={restaurant.address} onChange={(e, value) => restaurant.setAddress(value)} />
                    </div>
                    <div className='flex-item-gap'></div><div className="flex-item">
                        <Label >Telephone Number:</Label>
                        <TextField defaultValue={restaurant.telephoneNumber} onChange={(e, value) => restaurant.setPhone(value)} />
                    </div>
                    <div className='flex-item-gap'></div>
                    <div className='flex-item-gap'></div>
                    <div className='flex-item'></div>
                    <div className='flex-name' />

                </div>
            }
            </>
        );
    };
}