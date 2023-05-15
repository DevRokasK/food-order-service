import React from 'react';
import RestaurantItem from './RestaurantListCustomerItem';
import classes from './RestaurantList.module.css';

export default function RestaurantListIndex(props) {
    const getImageByIndex = (id) => {
        const images = [
          'https://img.freepik.com/free-photo/close-up-view-pizza-wooden-table_23-2148643427.jpg?w=1800&t=st=1684165526~exp=1684166126~hmac=2784ef4eb1d54633eee4e261a568d8a7c2c1ca8b6c98428bfa075a3850fd59d9',
          'https://img.freepik.com/free-photo/sushi-set-cappa-maki-prawn-tempura-rice-ginger-wasabi-top-view_141793-15518.jpg?w=1800&t=st=1684166830~exp=1684167430~hmac=aa801d7331bf6ea352140cf5a6cd3b1dfe4616143baf7cfb83bdd26caa976e4b',
          'https://img.freepik.com/free-photo/stir-fry-chicken-sweet-peppers-green-onion-top-view-asian-cuisine_2829-17187.jpg?w=1800&t=st=1684167067~exp=1684167667~hmac=c23f2c22b6607d7d442b27d3a5afae43715fed4c84afaa3d2713d4c451f4535c',        
          'https://img.freepik.com/free-photo/top-view-delicious-kebab-with-tomatoes-plate_23-2148685559.jpg?w=1800&t=st=1684167198~exp=1684167798~hmac=2c66756ed67ac2c94de4fc5f4bbcc43c76bf2e4525b16396677758d45a983294',
          'https://img.freepik.com/free-photo/top-view-delicious-wraps-with-meat-parsley_23-2148614458.jpg?w=1800&t=st=1684167457~exp=1684168057~hmac=a06f58b8add5551f751767b83d7751c76874a0ef9afb2778918341d5b58a2b23',
          'https://img.freepik.com/free-photo/top-view-condiments-aromatic-herbs_1220-435.jpg?w=1800&t=st=1684175993~exp=1684176593~hmac=7d51933b23f3fd64d0867e8972fd6594379e05d9221711f7045ad723099914f2',
      ];
        const imageIndex = id;
        if (images.length < id)
            return images[5];
        else
            return images[imageIndex];
      };

    return (
        <div className='cardGrid'>
            {props.restaurants.filter((restaurant) => (restaurant.available === 1)).map((restaurant) => (
                <RestaurantItem
                    key={restaurant.id}
                    image={getImageByIndex(restaurant.id - 1)}
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
