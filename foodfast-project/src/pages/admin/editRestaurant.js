import { useRouter } from 'next/router';
import EditRestaurantForm from '../../components/restaurants/EditRestaurantForm';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NewRestaurantPage(props) {
    const router = useRouter();
    const name = router.query.name;

    const [data, setData] = useState({
        name: "",
        description: "",
        workingHours: "",
        address: "",
        phoneNumber: "",
    });
    const requestURL = `http://localhost:5228/api/food-fast/restaurant/${name}?restaurantName=${name}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(requestURL);
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.log("error", error);
                setData([]);
            }
        }

        fetchData();
    }, [])

    async function editRestaurantHandler(enteredRestaurantData) {
        const response = await fetch(`http://localhost:5228/api/food-fast/restaurant/${name}/update?restaurantName=${name}`, {
            method: "PATCH",
            body: JSON.stringify(enteredRestaurantData),
            headers: {
                'Content-type': 'application/json'
            }
        });

        if (response.status === 200) {
            router.push('/admin')
        }

        toast.success(enteredRestaurantData.name + " updated!");
    }

    return <EditRestaurantForm onEditRestaurant={editRestaurantHandler} restaurant={data} />
}