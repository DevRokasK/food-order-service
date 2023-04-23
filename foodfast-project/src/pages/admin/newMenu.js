import { useRouter } from 'next/router';

export default function NewRestaurantPage(props) {
    const router = useRouter();

    async function addMenuHandler(enteredMenuData) {
        const requestURL = `http://localhost:5228/api/food-fast/restaurant/${props.name}/meal/create?restaurantName=${props.name}`;
        const response = await fetch(requestURL, {
            method: "POST",
            body: JSON.stringify(enteredMenuData),
            headers: {
                'Content-type': 'application/json'
            }
        });

        if (response.status === 200) {
            router.push('/admin')
        }
    }

    return
}