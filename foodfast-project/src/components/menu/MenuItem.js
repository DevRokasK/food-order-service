import Card from '../ui/Card';
import classes from '../restaurants/RestaurantItem.module.css';

export default function MenuItem(props) {
    function onOddToOrder() {
        props.addToOrder({
            id: props.id,
            name: props.name,
            price: props.price,
            size: props.size,
            package: props.package
        });
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.content}>
                    <p>Meal: {props.name}</p>
                    <p>Price: {props.price}€</p>
                    <p>Size: {props.size}</p>
                    <p>Packaging: {props.package}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={onOddToOrder}>Add to Order</button>
                </div>
            </Card>
        </li>
    );
}