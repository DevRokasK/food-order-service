import { useRouter } from 'next/router';
import NewRestaurantForm from '../../components/restaurants/NewRestaurantForm'

export default function NewRestaurantPage(props) {
    const router = useRouter();

    async function addRestaurantHandler(enteredRestaurantData) {
        const response = await fetch('http://localhost:5228/api/food-fast/restaurant/create', {
            method: "POST",
            body: JSON.stringify(enteredRestaurantData),
            headers: {
                'Content-type': 'application/json'
            }
        });

        if (response.status === 200) {
            router.push('/admin')
        }
    }

    return <NewRestaurantForm onAddRestaurant={addRestaurantHandler} />
}