import AdminReviewItem from './AdminReviewItem';
import classes from '../restaurants/RestaurantList.module.css';

export default function RestaurantListCustomer(props) {
    return (
        <ul className={classes.list}>
            {Array.isArray(props.reviews)
                ? props.reviews?.map((review) => (
                    <AdminReviewItem
                        key={review.id}
                        id={review.id}
                        author={review.author}
                        score={review.score}
                        comment={review.comment}
                    />
                )) :
                <p className='empty-message'>No reviews yet!</p>}
        </ul>
    )
}
