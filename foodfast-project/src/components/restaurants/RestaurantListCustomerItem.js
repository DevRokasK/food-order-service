import Card from '../ui/Card';
import classes from './RestaurantItem.module.css';
import Link from 'next/link';

export default function RestaurantItem(props) {

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.content}>
                    <div className={classes.image}>
                        <img src={props.image} alt={props.title} />
                    </div>
                    <p>Name: {props.name}</p>
                    <p>Description: {props.description}</p>
                    <p>Working hours: {props.workingHours}</p>
                    <p>Phone: {props.telephoneNumber}</p>
                </div>
                <div className={classes.actions}>
                    <button><Link href={{
                        pathname: `/restaurants/menu`,
                        query: {
                            name: props.name
                        }
                    }}>Menu</Link></button>
                </div>
                <div className={classes.actions}>
                    <button><Link href={{
                        pathname: `/restaurants/reviews`,
                        query: {
                            name: props.name
                        }
                    }}>Reviews</Link></button>
                </div>
            </Card>
        </li>
    );
}