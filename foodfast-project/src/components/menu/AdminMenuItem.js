import Card from '../ui/Card';
import classes from '../restaurants/RestaurantItem.module.css';
import { useRouter } from 'next/router';

export default function ReviewItem(props) {

    const router = useRouter();
    const name = router.query.name;

    async function deleteHandler(event) {
        event.preventDefault();
        const response = await fetch(`http://localhost:5228/api/food-fast/restaurant/${name}/meal/${props.id}/delete?mealID=${props.id}`, {
            method: "POST"
        });

        if (response.status === 200) {
            router.push(`/admin`);
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.content}>
                    <p>Meal: {props.name}</p>
                    <p>Price: {props.price}</p>
                    <p>Size: {props.size}</p>
                    <p>Packaging: {props.package}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={deleteHandler}>Delete</button>
                </div>
            </Card>
        </li>
    );
}