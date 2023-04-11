import { useRouter } from 'next/router';
import NewRestaurantForm from '../../components/restaurants/NewRestaurantForm'

export default function NewRestaurantPage(props) {
    const router = useRouter();

    async function addRestaurantHandler(enteredRestaurantData) {
        const response = await fetch('../api/newRestaurant', {
            method: "POST",
            body: JSON.stringify(enteredRestaurantData),
            headers: {
                'Content-type': 'applicationn/json'
            }
        });

        const data = response.json();

        props.restaurants.push(enteredRestaurantData);

        router.push('/admin')
    }

    return <NewRestaurantForm onAddRestaurant={addRestaurantHandler} />
}