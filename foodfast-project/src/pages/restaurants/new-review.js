import { useRouter } from 'next/router';
import NewReviewForm from '../../components/Reviews/NewReviewForm'

export default function NewRestaurantPage(props) {
    const router = useRouter();
    const restaurantId = router.query.restaurantId;

    async function addReviewHandler(enteredReviewData) {
        const response = await fetch('../api/newReview', {
            method: "POST",
            body: JSON.stringify(enteredReviewData),
            headers: {
                'Content-type': 'applicationn/json'
            }
        });

        const data = response.json();

        //props.restaurants.push(enteredRestaurantData);

        router.push('/restaurants')
    }

    return <NewReviewForm onAddReview={addReviewHandler} />
}