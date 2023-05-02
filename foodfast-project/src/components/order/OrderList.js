import OrderItem from './OrderItem';
import classes from '../restaurants/RestaurantList.module.css';

export default function OrderList(props) {
    return (
        <ul className={classes.list}>
            {Array.isArray(props.order)
                ? props.order?.map((order) => (
                    <OrderItem
                        key={order.id}
                        name={order.name}
                        price={order.price}
                        size={order.size}
                        package={order.package}
                    />
                )) :
                <p className='empty-message'>Nothing in the order yet!</p>}
        </ul>
    )
}
