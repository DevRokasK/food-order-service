import MeetupItem from './RestaurantItem';
import classes from './RestaurantList.module.css';

export default function RestaurantList(props) {
    return (
        <ul className={classes.list}>
            {props.restaurants.map((restaurant) => (
                <MeetupItem
                    key={restaurant.id}
                    id={restaurant.id}
                    name={restaurant.name}
                    description={restaurant.description}
                    workingHours={restaurant.workingHours}
                    address={restaurant.address}
                    telephoneNumber={restaurant.telephoneNumber}
                    isHidden={restaurant.isHidden}
                />
            ))}
        </ul>
    );
}