import RestaurantItem from './RestaurantItem';
import classes from './RestaurantList.module.css';
import { useRouter } from 'next/router';

export default function RestaurantList(props) {
    const router = useRouter();
    
    async function addRestaurantHandler(stateData) {
        const requestURL = `http://localhost:5228/api/food-fast/restaurant/change-availability?restaurantName=${stateData.restaurantName}&state=${stateData.state}`;
        const response = await fetch(requestURL, {
            method: "POST"
        });

        if (response.status === 200) {
            router.push('/admin')
        }
    }

    return (
        <ul className={classes.list}>
            {props.restaurants.map((restaurant) => (
                <RestaurantItem onChangeState={addRestaurantHandler}
                    key={restaurant.id}
                    id={restaurant.id}
                    name={restaurant.name}
                    description={restaurant.description}
                    workingHours={restaurant.workingHours}
                    address={restaurant.address}
                    telephoneNumber={restaurant.phoneNumber}
                    isHidden={restaurant.available}
                />
            ))}
        </ul>
    );
}