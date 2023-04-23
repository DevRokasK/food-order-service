import { useRouter } from 'next/router';
import NewReviewForm from '../../components/reviews/NewReviewForm'

export default function NewRestaurantPage(props) {
    const router = useRouter();
    const restaurantName = router.query.name;
    console.log(restaurantName);

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

    return <NewReviewForm onAddReview={addReviewHandler} name={restaurantName} />
}