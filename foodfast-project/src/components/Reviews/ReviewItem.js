import Card from '../ui/Card';
import classes from '../restaurants/RestaurantItem.module.css';

export default function ReviewItem(props) {

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.content}>
                    <p>Author: {props.author}</p>
                    <p>Score: {props.score}</p>
                    <p>Review: {props.comment}</p>
                </div>
                <div className={classes.actions}>
                    <button onclick="alert('Cia turi but linkas')">Delete</button>
                </div>
            </Card>
        </li>
    );
}