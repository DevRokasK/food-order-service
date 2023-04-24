import { useRef } from 'react';
import Link from 'next/link';
import Card from '../ui/Card';
import classes from '../restaurants/NewRestaurantForm.module.css';
import MenuList from "../../components/menu/MenuList"
import { Menu } from '@/models/Menu';

export default function NewMenuForm(props) {
    const nameInputRef = useRef();
    const priceInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredPrice = priceInputRef.current.value;

        const menuData = {
            name: enteredName,
            price: enteredPrice,
        };

        props.onAddMenu(menuData);
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
                        <label htmlFor='name'>Menu Title</label>
                        <input type='text' required id='name' ref={nameInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='price'>Price</label>
                        <input type='text' required id='price' ref={priceInputRef} />
                    </div>
                    <div className={classes.actions}>
                        <button>Add Menu</button>
                    </div>
                </form>
            </Card>
        </div>
    );
}