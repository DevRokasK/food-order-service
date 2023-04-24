import { useRouter } from 'next/router';
import NewMenuForm from '../../components/menu/NewMenuForm'

export default function NewRestaurantPage(props) {
    const router = useRouter();
    const restaurantName = router.query.name;
    console.log(restaurantName);

    async function addMenuHandler(enteredMenuData) {
        const response = await fetch('../api/newMenu', {
            method: "POST",
            body: JSON.stringify(enteredMenuData),
            headers: {
                'Content-type': 'applicationn/json'
            }
        });

        const data = response.json();

        //props.restaurants.push(enteredRestaurantData);

        router.push('/restaurants')
    }

    return <NewMenuForm onAddMenu={addMenuHandler} name={restaurantName} />
}