import { useRouter } from 'next/router';
import NewReviewForm from '../../components/reviews/NewReviewForm'

export default function NewRestaurantPage(props) {
    const router = useRouter();
    const restaurantName = router.query.restaurantName;

    async function addReviewHandler(enteredReviewData) {
        const response = await fetch(`http://localhost:5228/api/food-fast/restaurant/${restaurantName}/review/create?restaurantName=${restaurantName}`, {
            method: "POST",
            body: JSON.stringify(enteredReviewData),
            headers: {
                'Content-type': 'application/json'
            }
        });

        if (response.status === 200) {
            router.push(`/restaurants/reviews?name=${restaurantName}`);
        }
    }

    return <NewReviewForm onAddReview={addReviewHandler} name={restaurantName} />
}