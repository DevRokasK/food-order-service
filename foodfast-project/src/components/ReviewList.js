import ReviewItem from './ReviewItem';
import classes from './restaurants/RestaurantList.module.css';

export default function RestaurantListCustomer(props) {

    return (
        <ul className={classes.list}>
            {props?.reviews?.map((review) => (
                <ReviewItem
                    key={review.id}
                    author={review.author}
                    score={review.score}
                    comment={review.comment}
                />
            ))}
        </ul>
    )
}
