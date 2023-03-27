import React from 'react';
import { Restaurant } from '../models/Restaurant';
import { DetailsListLayoutMode, SelectionMode, IColumn, DetailsList, Panel, Selection, PanelType, Link } from '@fluentui/react';

export interface IReviewListProps {
    restaurant: Restaurant;
}
export class ReviewList extends React.Component<IReviewListProps> {

    private columns: IColumn[];

    public constructor(props: IReviewListProps) {
        super(props);

        this.columns = [
            {
                key: 'column1',
                name: 'Author',
                fieldName: 'author',
                minWidth: 70,
                maxWidth: 90,
                isRowHeader: true,
                isResizable: true,
                data: 'string',
                isPadded: true,

            },
            {
                key: 'column2',
                name: 'Score',
                fieldName: 'score',
                minWidth: 70,
                maxWidth: 90,
                isRowHeader: true,
                isResizable: true,
                data: 'number',
                isPadded: true,
            },
            {
                key: 'column3',
                name: 'Comment',
                fieldName: 'comment',
                minWidth: 70,
                maxWidth: 90,
                isRowHeader: true,
                isResizable: true,
                data: 'string',
                isPadded: true,
            }

        ]
    }

    public render() {

        const columns = this.columns;
        if (this.props.restaurant?.ReviewStore?.isNotLoaded) {
            this.props.restaurant?.ReviewStore?.GetReview();
        }
        const items = this.props.restaurant?.ReviewStore?.Reviews.slice();

        return (

            <div>
                {items &&
                    <DetailsList
                        items={items}
                        columns={columns}
                        layoutMode={DetailsListLayoutMode.justified}
                        isHeaderVisible={true}
                    />}
            </div>
        )
    }
}

