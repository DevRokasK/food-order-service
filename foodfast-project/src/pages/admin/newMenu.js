import { useRouter } from 'next/router';
import NewMenuForm from '../../components/menu/NewMenuForm'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function NewRestaurantPage(props) {
    const router = useRouter();
    const restaurantName = router.query.restaurantName;

    // ERROR 400 bad request
    async function addMenuHandler(enteredMenuData) {
        const requestURL = `http://localhost:5228/api/food-fast/restaurant/${restaurantName}/meal/create?restaurantName=${restaurantName}`;
        console.log(enteredMenuData);
        const response = await fetch(requestURL, {
            method: "POST",
            body: JSON.stringify(enteredMenuData),
            headers: {
                'Content-type': 'application/json'
            }
        });

        if (response.status === 200) {
            router.push(`/admin/menu?name=${restaurantName}`)
        }

        toast.success(enteredMenuData.name + " added to menu!");

    }

    return <NewMenuForm onAddMenu={addMenuHandler} name={restaurantName} />
}