import Card from '../ui/Card';
import classes from '../restaurants/RestaurantItem.module.css';
import { useRouter } from 'next/router';

export default function ReviewItem(props) {
    const router = useRouter();
    const name = router.query.name;

    async function deleteHandler(event) {
        event.preventDefault();

        const response = await fetch(`http://localhost:5228/api/food-fast/restaurant/${name}/review/${props.author}/delete?reviewID=${props.id}`, {
            method: "POST"
        });

        if (response.status === 200) {
            /* router.push(`/restaurants/reviews?name=${name}`); */
            router.push(`/restaurants`);
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.content}>
                    <p>Author: {props.author}</p>
                    {/* <p>Score: {props.score}</p> */}
                    <p>Review: {props.comment}</p>
                </div>
                {/* <div className={classes.actions}>
                    <button onClick={deleteHandler}>Delete</button>
                </div> */}
            </Card>
        </li>
    );
}