import React from 'react';
import RestaurantItem from './RestaurantListCustomerItem';
import classes from './RestaurantList.module.css';

export default function RestaurantListIndex(props) {

    return (
        <div className='cardGrid'>
            {props.restaurants.filter((restaurant) => (restaurant.available === 1)).map((restaurant) => (
                <RestaurantItem
                    key={restaurant.id}
                    image="https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148695092.jpg"
                    id={restaurant.id}
                    name={restaurant.name}
                    description={restaurant.description}
                    workingHours={restaurant.workingHours}
                    telephoneNumber={restaurant.phoneNumber}
                />
            ))}
        </div>
    )
}
