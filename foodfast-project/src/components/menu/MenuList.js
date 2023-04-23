import MenuItem from './MenuItem';
import classes from '../restaurants/RestaurantList.module.css';

export default function RestaurantListCustomer(props) {

    return (
        <ul className={classes.list}>
            {Array.isArray(props.menu)
                ? props.menu?.map((menu) => (
                    <MenuItem
                        key={menu.id}
                        name={menu.name}
                        price={menu.price}
                        size={menu.size}
                        package={menu.package}
                    />
                )) :
                <p className='empty-message'>No menu yet!</p>}
        </ul>
    )
}
