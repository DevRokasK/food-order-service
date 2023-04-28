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

    function goToMenu(name) {
        router.push(`admin/menu?name=${name}`);
    }

    function goToEdit(name) {
        router.push(`admin/editRestaurant?name=${name}`)
    }

    function goToReviews(name) {
        router.push(`admin/reviews?name=${name}`)
    }

    return (
        <ul className={classes.list}>
            <h1 className='page-name'>Restaurants</h1>
            {props.restaurants.map((restaurant) => (
                <RestaurantItem onChangeState={addRestaurantHandler} onMenuClick={goToMenu} onEditClick={goToEdit} onReviewsClick={goToReviews}
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