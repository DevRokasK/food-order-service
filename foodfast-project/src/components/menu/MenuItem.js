import Card from '../ui/Card';
import classes from '../restaurants/RestaurantItem.module.css';

export default function ReviewItem(props) {

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.content}>
                    <p>Meal: {props.name}</p>
                    <p>Price: {props.price}</p>
                    <p>Size: {props.size}</p>
                    <p>Packaging: {props.package}</p>
                </div>
            </Card>
        </li>
    );
}