import Card from '../ui/Card';
import classes from './RestaurantItem.module.css';
import { useState } from 'react';

export default function MeetupItem(props) {
    const [objCopy, setHidden] = useState({ ...props });

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.content}>
                    <p>Id: {props.id}</p>
                    <p>Name: {props.name}</p>
                    <p>Description: {props.description}</p>
                    <p>Working hours: {props.workingHours}</p>
                    <p>Address: {props.address}</p>
                    <p>Phone: {props.telephoneNumber}</p>
                    <p>Hidden: {objCopy.isHidden?.toString()}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={() => setHidden(objCopy.isHidden = !objCopy.isHidden)}>Change status</button>
                </div>
            </Card>
        </li>
    );
}