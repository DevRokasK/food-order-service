import Card from '../ui/Card';
import classes from './RestaurantItem.module.css';

export default function RestaurantItem(props) {
    function submitHandler(event) {
        event.preventDefault();

        const name = props.name;
        let state = 0;
        if (props.isHidden == 0) {
            state = 1;
        }

        const stateData = {
            restaurantName: name,
            state: state
        }

        props.onChangeState(stateData);
    }

    function menuHandler(event) {
        event.preventDefault();

        props.onMenuClick(props.name);
    }

    function editHandler(event) {
        event.preventDefault();

        props.onEditClick(props.name);
    }

    function reviewsHandler(event) {
        event.preventDefault();

        props.onReviewsClick(props.name);
    }

    let state = null;
    if (props.isHidden == 0) {
        state = "Hidden";
    } else {
        state = "Visible";
    }

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
                    <p>State: {state}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={submitHandler}>Change state</button>
                </div>
                <div className={classes.actions1}>
                    <button onClick={editHandler}>Edit info</button>
                    <div className='gap'></div>
                    <button onClick={menuHandler}>Menu</button>
                    <div className='gap'></div>
                    <button onClick={reviewsHandler}>Reviews</button>
                </div>
            </Card>
        </li>
    );
}