import { useRef } from 'react';
import Link from 'next/link';
import Card from '../ui/Card';
import classes from './NewRestaurantForm.module.css';
import { Restaurant } from '@/models/Restaurant';

export default function NewMeetupForm(props) {
    const idInputRef = useRef();
    const nameInputRef = useRef();
    const descriptionInputRef = useRef();
    const hoursInputRef = useRef();
    const addressInputRef = useRef();
    const phoneInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredId = idInputRef.current.value;
        const enteredName = nameInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const enteredHours = hoursInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;


        const restaurantData = {
            id: enteredId,
            name: enteredName,
            description: enteredDescription,
            workingHours: enteredHours,
            address: enteredAddress,
            telephoneNumber: enteredPhone,
            isHiddem: false,
        };

        props.onAddRestaurant(restaurantData);
    }

    return (
        <div className="grid-container">
            <div className='header'>
                <div className='header-content'>
                    <div className='header-logo'>
                        <img src="https://i.ibb.co/rHDMF1F/FF-logo.png" alt="FoodFast logo" className='logo' />
                    </div>
                    <div className='header-name'>
                        <Link href="/">FoodFast</Link>
                    </div>
                </div>
            </div>
            <div className='navigation'>
                <div className='navigation-content'>
                    <div className='admin-command-bar'>
                        <button className='navigation-right-button'><Link href="/admin">Cancel</Link></button>
                    </div>
                </div>
            </div>
            <Card>
                <form className={classes.form} onSubmit={submitHandler}>
                    <div className={classes.control}>
                        <label htmlFor='id'>Restaurant Id</label>
                        <input type='text' required id='id' ref={idInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='name'>Restaurant Title</label>
                        <input type='text' required id='name' ref={nameInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='description'>Description</label>
                        <textarea
                            id='description'
                            required
                            rows='5'
                            ref={descriptionInputRef}
                        ></textarea>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='workingHours'>Working Hours</label>
                        <input type='text' required id='workingHours' ref={hoursInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='address'>Address</label>
                        <input type='text' required id='address' ref={addressInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='telephoneNumber'>Telephone Number</label>
                        <input type='text' required id='telephoneNumber' ref={phoneInputRef} />
                    </div>
                    <div className={classes.actions}>
                        <button>Add Restaurant</button>
                    </div>
                </form>
            </Card>
        </div>
    );
}